import { Request, Response } from "express";

export default class UserController {
  public store (req: Request, res: Response) {
    return res.json({message: 'Hello Chat2Desk'});
  }
}
