import {
  isAfter,
  isBefore,
  parseISO,
  subDays,
  endOfDay,
  startOfDay,
} from 'date-fns';
import { Op } from 'sequelize';

import Student from '../models/Student';
import Checkin from '../models/Checkin';
import Registration from '../models/Registration';

class CheckinController {
  async show(req, res) {
    const { id } = req.params;
    const studentExists = await Student.findByPk(id);

    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    const checkins = await Checkin.findAll({
      where: {
        student_id: id,
      },
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email'],
        },
      ],
    });

    return res.json({ checkins });
  }

  async store(req, res) {
    const { id } = req.params;

    const studentExists = await Student.findByPk(id);

    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    const registrationExists = await Registration.findOne({
      where: {
        student_id: id,
      },
    });

    if (!registrationExists) {
      return res.json({ error: 'Student has not a registration' });
    }

    const todaysDate = new Date(
      // new Date().getFullYear(),
      // new Date().getMonth(),
      // new Date().getDate()
      2019,
      10,
      27
    );

    const subDate = subDays(todaysDate, 7);

    console.log(todaysDate, subDate);

    if (isBefore(todaysDate, parseISO(registrationExists.start_date))) {
      return res.status(401).json({
        error: "you cant't checkin before your registration starting date",
      });
    }

    if (isAfter(todaysDate, parseISO(registrationExists.end_date))) {
      return res.status(401).json({
        error: "you cant't checkin after your registration ending date",
      });
    }

    const checkins = await Checkin.findAll({
      where: {
        student_id: id,
        created_at: {
          [Op.between]: [subDate, endOfDay(todaysDate)],
        },
      },
    });

    if (checkins.length >= 5) {
      return res.status(401).json({
        error: "You've reached the maximum capacity of checkins within 7 days",
      });
    }

    const newCheckin = await Checkin.create({ student_id: id });

    return res.json({ checkins });
  }
}

export default new CheckinController();
