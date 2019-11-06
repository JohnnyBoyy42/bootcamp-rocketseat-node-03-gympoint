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

    return res.json({ message: 'deu certo' });
  }
}

export default new PlainController();
