import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';
import FileController from './app/controllers/FileController';
import NotificationController from './app/controllers/NotificationController';
import HelpOrderController from './app/controllers/HelpOrderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/help-orders', HelpOrderController.index);
routes.post('/students/:id/help-orders', HelpOrderController.store);
routes.get('/students/:id/help-orders', HelpOrderController.show);
routes.post('/help-orders/:id/answer', HelpOrderController.update);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.get('/students', StudentController.index);

routes.get('/plain', PlanController.index);
routes.post('/plain', PlanController.store);
routes.put('/plain/:id', PlanController.update);
routes.delete('/plain/:id', PlanController.delete);

routes.get('/registration', RegistrationController.index);
routes.post('/registration', RegistrationController.store);
routes.put('/registration/:id', RegistrationController.update);
routes.delete('/registration/:id', RegistrationController.delete);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/notification', NotificationController.index);
routes.put('/notification/:id', NotificationController.update);

export default routes;
