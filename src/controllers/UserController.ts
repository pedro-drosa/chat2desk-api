import { Request, Response } from "express";
import User from "../models/User";

import CreateUserService from "../services/CreateUserService";
import RemoveUserService from "../services/RemoveUserService";

const createService = new CreateUserService();
const removeService = new RemoveUserService();

export default class UserController {
  public async store(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const user = await createService.execute({ name, email, password });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  public index(req: Request, res: Response) {
    const data = User.find();
    return res.status(200).json(data);
  }

  public delete(req: Request, res: Response) {
    const { id } = req.params;
    removeService.execute(id);
    return res.status(200).send();
  }
}
