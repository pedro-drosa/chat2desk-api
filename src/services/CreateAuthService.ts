import bcrypt from 'bcryptjs';

import db from "../Database";
import IUser from "../interfaces/IUser";

export default class CreateAuthService {
  public async execute({ email, password }: Omit<IUser, "id" | "name">) {
    const user = db.findByEmail(email);

    if(user.email !== email) {
      throw new Error("username or password not found").message;
    }

    if(! await bcrypt.compare(password, user.password)) {
      throw new Error("username or password not found").message;
    }

    return user;
  }
}