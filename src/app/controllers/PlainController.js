import * as Yup from 'yup';

import Plain from '../models/Plain';

class PlainController {
  async store(req, res) {
    let errorMessage = '';

    const schema = Yup.object().shape({
      title: Yup.string().required('Title is required'),
      duration: Yup.number()
        .typeError('Duration must be a number')
        .positive('Duration must be positive')
        .integer('Duration must be an integer')
        .required('Duration is required'),
      price: Yup.number()
        .typeError('Price must be a number')
        .positive('Price must be positive')
        .required('Price is required'),
    });

    await schema.validate(req.body, { abortEarly: false }).catch(error => {
      [errorMessage] = error.errors;
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: errorMessage });
    }

    const planExists = await Plain.findOne({
      where: { title: req.body.title },
    });

    if (planExists) {
      return res.status(400).json({ error: 'Plain already exists' });
    }

    const { id, title, duration, price } = await Plain.create(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }
}

export default new PlainController();
