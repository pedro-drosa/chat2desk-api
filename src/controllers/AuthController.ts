import { Request, Response } from "express";
import CreateAuthService from "../services/CreateAuthService";

const createAuth = new CreateAuthService;

export default class AuthController {
  public async store(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await createAuth.execute({ email, password });

      return res.json(user);
    } catch (error) {
      return res.status(404).json({ error: 'Username or password not found' });
    }
  }
}
