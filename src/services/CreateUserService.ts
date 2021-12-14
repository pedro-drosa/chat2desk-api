import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';
import db from "../Database";
import IUser from '../interfaces/IUser';

export default class CreateUserService {
  public async execute({ name, email, password }: Omit<IUser,"id">) {
    const userExists = db.findByEmail(email);

    if(userExists) {
      throw new Error("User already exists").message;
    }

    const hash = await bcrypt.hash(password, 5);
    return db.create({ id: uuid(),name, email, password: hash });
  }
}