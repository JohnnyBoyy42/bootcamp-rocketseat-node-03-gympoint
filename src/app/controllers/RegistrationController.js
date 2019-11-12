import * as Yup from 'yup';
import { isBefore, addMonths, parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Registration from '../models/Registration';
import Plain from '../models/Plain';
import Student from '../models/Student';
import File from '../models/File';

import Notification from '../schemas/Notification';

import Queue from '../../lib/Queue';
import NewRegistrationMail from '../jobs/NewRegistrationMail';

class RegistrationController {
  async index(req, res) {
    const registrations = await Registration.findAll({
      where: { canceled_at: null },
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
        {
          model: Plain,
          as: 'plan',
          attributes: ['title', 'duration', 'price'],
        },
      ],
    });

    return res.json({ registrations });
  }

  async store(req, res) {
    let errorMessage = '';
    const schema = Yup.object().shape({
      student_id: Yup.number()
        .typeError('Student ID must be a number')
        .positive('Student ID must be positive')
        .integer('Student ID must be an integer')
        .required('Student ID is required'),
      plan_id: Yup.number()
        .typeError('Plan ID must be a number')
        .positive('Plan ID must be positive')
        .integer('Plan ID must be an integer')
        .required('Plan ID is required'),
      start_date: Yup.string().required('Starting date is required'),
    });

    await schema.validate(req.body, { abortEarly: false }).catch(error => {
      [errorMessage] = error.errors;
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: errorMessage });
    }

    const { student_id, plan_id, start_date } = req.body;

    const studentExists = await Student.findByPk(student_id);

    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    const planExists = await Plain.findByPk(plan_id);

    if (!planExists) {
      return res.status(400).json({ error: 'Plan does not exist' });
    }

    const registrationExists = await Registration.findOne({
      where: {
        student_id,
      },
    });

    if (registrationExists) {
      return res
        .status(401)
        .json({ error: 'This student has a registration already' });
    }

    let [date] = start_date.split('T');
    date = parseISO(date);

    if (isBefore(date, new Date())) {
      return res.status(400).json({ error: 'Past dates are not allowed' });
    }

    const registrationMail = req.body;

    registrationMail.start_date = date;
    registrationMail.end_date = addMonths(date, planExists.duration);
    registrationMail.price = parseFloat(
      planExists.duration * planExists.price
    ).toFixed(2);
    registrationMail.title = planExists.title;
    registrationMail.name = studentExists.name;
    registrationMail.email = studentExists.email;
    registrationMail.pricePerMonth = parseFloat(planExists.price).toFixed(2);

    const { id, end_date, price } = await Registration.create(registrationMail);

    const formattedDate = format(date, "'dia' dd 'de' MMMM' de 'yyyy'", {
      locale: pt,
    });

    await Notification.create({
      content: `Novo(a) aluno(a) realizou a matricula que se inica no ${formattedDate}`,
      user: req.userId,
    });

    await Queue.add(NewRegistrationMail.key, { registrationMail });

    return res.json({
      id,
      start_date,
      end_date,
      price,
    });
  }

  async update(req, res) {
    const { id } = req.params;
    let errorMessage = '';
    let date = '';
    const schema = Yup.object().shape({
      student_id: Yup.number()
        .typeError('Student ID must be a number')
        .positive('Student ID must be positive')
        .integer('Student ID must be an integer'),
      plan_id: Yup.number()
        .typeError('Plan ID must be a number')
        .positive('Plan ID must be positive')
        .integer('Plan ID must be an integer'),
      start_date: Yup.string(),
    });

    await schema.validate(req.body, { abortEarly: false }).catch(error => {
      [errorMessage] = error.errors;
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: errorMessage });
    }

    const registration = await Registration.findByPk(id);

    if (!registration) {
      return res.status(400).json({ error: 'Registration does not exist' });
    }

    const { plan_id = '', start_date = '', student_id = '' } = req.body;

    const planExists = await Plain.findByPk(plan_id || registration.plan_id);

    if (!planExists) {
      return res.status(400).json({ error: 'Plan does not exist' });
    }

    if (start_date) {
      [date] = start_date.split('T');
      date = parseISO(date);
      registration.start_date = date;
      registration.end_date = addMonths(
        date || parseISO(registration.start_date),
        planExists.duration
      );
    }

    if (plan_id) {
      registration.plan_id = planExists.id;
      registration.end_date = addMonths(
        date || parseISO(registration.start_date),
        planExists.duration
      );
      registration.price = parseFloat(
        planExists.duration * planExists.price
      ).toFixed(2);
      registration.title = planExists.title;
    }

    if (student_id) {
      const studentExists = await Student.findByPk(student_id);

      if (!studentExists) {
        return res.status(400).json({ error: 'Student does not exist' });
      }

      registration.student_id = studentExists.id;
      registration.name = studentExists.name;
      registration.email = studentExists.email;
    }

    await registration.save();
    return res.json(registration);
  }

  async delete(req, res) {
    const { id } = req.params;

    const registration = await Registration.findByPk(id);

    if (!registration) {
      return res.status(400).json({ error: 'Registration does not exist' });
    }

    registration.canceled_at = new Date();

    await registration.save();

    return res.json({ registration });
  }
}

export default new RegistrationController();
