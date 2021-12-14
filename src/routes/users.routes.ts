import { Router } from 'express';
import UserController from '../controllers/UserController';

const usersRouter = Router();
const userController = new UserController();

usersRouter.post('/users', userController.store);
usersRouter.get('/users', userController.index);

export default usersRouter;
