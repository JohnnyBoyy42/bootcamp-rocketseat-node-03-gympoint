import * as Yup from 'yup';

import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class HelpOrderController {
  async index(req, res) {
    const orders = await HelpOrder.findAll({
      where: {
        answer_at: null,
      },
      attributes: ['id', 'student_id', 'answer', 'answer_at', 'created_at'],
    });
    return res.json({ orders });
  }

  async store(req, res) {
    let errorMessage = '';
    const { id } = req.params;
    const schema = Yup.object().shape({
      question: Yup.string().required('Question is required'),
    });

    await schema.validate(req.body, { abortEarly: false }).catch(error => {
      [errorMessage] = error.errors;
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: errorMessage });
    }

    const studentExists = await Student.findByPk(id);

    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    req.body.student_id = id;

    const { id: idBase, student_id, question } = await HelpOrder.create(
      req.body
    );

    return res.json({ idBase, student_id, question });
  }

  async show(req, res) {
    const { id } = req.params;

    const studentExists = await Student.findByPk(id);

    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    const orders = await HelpOrder.findAll({
      where: {
        student_id: id,
      },
      attributes: ['id', 'student_id', 'answer', 'answer_at', 'created_at'],
    });

    return res.json({ orders });
  }
}

export default new HelpOrderController();
