import { Request, Response } from "express";
import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/users', (req: Request, res: Response)=> res.json({message: 'Hello Chat2Desk'}));

export default usersRouter;
