import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const { height, weight } = req.body;
    let errorMessage = '';

    req.body.height =
      height && typeof height === 'string' ? height.replace(',', '.') : height;
    req.body.weight =
      weight && typeof height === 'string' ? weight.replace(',', '.') : weight;

    const schema = Yup.object().shape({
      name: Yup.string().required('name is required'),
      email: Yup.string()
        .email('email must be a valid email format')
        .required('name is required'),
      age: Yup.number()
        .typeError('Age must be a number')
        .positive('Age must be positive')
        .integer('Age must be an integer')
        .required('Age is required'),
      height: Yup.number()
        .positive('Height must be positive')
        .required('Height is required'),
      weight: Yup.number()
        .positive('Weight must be positive')
        .required('Weight is required'),
    });

    await schema.validate(req.body, { abortEarly: false }).catch(error => {
      errorMessage = error.message;
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: errorMessage });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(401).json({ error: 'student already exists' });
    }

    const { id, name, email, age } = await Student.create(req.body);

    return res.json({
      id,
      name,
      email,
      age,
      height,
      weight,
    });
  }

  async update(req, res) {
    const { height: heightBody, weight: weightBody, email } = req.body;
    req.body.height =
      heightBody && typeof heightBody === 'string'
        ? heightBody.replace(',', '.')
        : heightBody;
    req.body.weight =
      weightBody && typeof weightBody === 'string'
        ? weightBody.replace(',', '.')
        : weightBody;

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email('Email must be a valid email format'),
      age: Yup.number()
        .typeError('Age must be a number')
        .positive('Age muste be positive')
        .integer('age must be an integer'),
      height: Yup.number().positive('Height must be positive'),
      weight: Yup.number().positive('Weight must be positive'),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const student = await Student.findByPk(req.params.id);

    if (email !== student.email) {
      const studentExists = await Student.findOne({
        where: { email },
      });

      if (studentExists) {
        return res.status(400).json({ error: 'Studen already exists' });
      }
    }

    const { id, name, height, weight } = await student.update(req.body);

    return res.json({
      id,
      name,
      height,
      weight,
    });
  }
}

export default new StudentController();
