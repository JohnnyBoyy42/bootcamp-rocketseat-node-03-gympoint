import * as Yup from 'yup';
import { isBefore, addMonths, parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Registration from '../models/Registration';
import Plain from '../models/Plain';
import Student from '../models/Student';
import File from '../models/File';

import Notification from '../schemas/Notification';

import Mail from '../../lib/Mail';

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

    req.body.start_date = date;
    req.body.end_date = addMonths(date, planExists.duration);
    req.body.price = parseFloat(planExists.duration * planExists.price).toFixed(
      2
    );

    const { id, end_date, price } = await Registration.create(req.body);

    const formattedDate = format(date, "'dia' dd 'de' MMMM' de 'yyyy'", {
      locale: pt,
    });

    await Notification.create({
      content: `Novo(a) aluno(a) realizou a matricula que se inica no ${formattedDate}`,
      user: req.userId,
    });

    await Mail.sendMail({
      to: `${studentExists.name} <${studentExists.email}>`,
      subject: 'Email de boas vindas',
      template: 'newRegistration',
      context: {
        student: studentExists.name,
        plan: planExists.title,
        start_date: formattedDate,
        end_date: format(req.body.end_date, "'dia' dd 'de' MMMM' de 'yyyy'", {
          locale: pt,
        }),
        price: req.body.price.replace('.', ','),
      },
    });

    return res.json({
      id,
      start_date,
      end_date,
      price,
    });
  }
}

export default new RegistrationController();
