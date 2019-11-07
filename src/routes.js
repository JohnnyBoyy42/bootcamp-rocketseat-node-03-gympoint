import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

routes.get('/plain', PlanController.index);
routes.post('/plain', PlanController.store);
routes.put('/plain/:id', PlanController.update);
routes.delete('/plain/:id', PlanController.delete);

routes.get('/registration', RegistrationController.index);
routes.post('/registration', RegistrationController.store);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
