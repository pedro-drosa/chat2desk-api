import bcrypt from "bcryptjs";
import * as yup from "yup";

import User from "../models/User";
import CreateTokenService from "./CreateTokenService";

import IUser from "../interfaces/IUser";

const createToken = new CreateTokenService();

export default class CreateAuthService {
  public async execute({ email, password }: Omit<IUser, "id" | "name">) {
    let schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
    });

    const user = User.findByEmail(email);

    if (!(await schema.isValid({ email, password }))) {
      return { error: "validation error, please check the data" };
    }

    if (user.email !== email) {
      return { error: "username or password not found" };
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return { error: "username or password not found" };
    }

    return { user, token: createToken.execute(user.id) };
  }
}
