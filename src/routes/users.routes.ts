import { Router } from 'express';
import UserController from '../controllers/UserController';
import authMiddleware from '../middlewares/auth';

const usersRouter = Router();
const userController = new UserController();

usersRouter.post('/users', userController.store);
usersRouter.get('/users', authMiddleware, userController.index);
usersRouter.delete('/users/:id', userController.delete);

export default usersRouter;
