import { isAfter, isBefore, parseISO } from 'date-fns';

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
        id,
      },
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
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );

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

    return res.json({ registrationExists });
  }
}

export default new CheckinController();
