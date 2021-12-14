import { Router } from 'express';
import UserController from '../controllers/UserController';
import authMiddleware from '../middlewares/auth';

const usersRouter = Router();
const userController = new UserController();

usersRouter.post('/users', userController.store);
usersRouter.get('/users', authMiddleware, userController.index);

export default usersRouter;
