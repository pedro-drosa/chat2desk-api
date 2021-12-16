import { Request, Response } from "express";
import User from "../models/User";
import CreateUserService from "../services/CreateUserService";

const userService = new CreateUserService();

export default class UserController {
  public async store(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const user = await userService.execute({ name, email, password });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  public index(req: Request, res: Response) {
    const data = User.find();
    return res.status(200).json(data);
  }
}
