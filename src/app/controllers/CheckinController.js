import Student from '../models/Student';
import Checkin from '../models/Checkin';

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
}

export default new CheckinController();
