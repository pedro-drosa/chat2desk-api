import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';
import * as yup from 'yup';

import User from "../models/User";
import CreateTokenService from './CreateTokenService';

import IUser from '../interfaces/IUser';

const createToken = new CreateTokenService();

export default class CreateUserService {
  public async execute({ name, email, password }: Omit<IUser,"id">) {
    let schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
    });

    if(!(await schema.isValid({name, email, password}))){
      return { error: "validation error, please check the data" };
    }

    const userExists = User.findByEmail(email);

    if(userExists) {
      return { error: "User already exists" };
    }

    const hash = await bcrypt.hash(password, 5);
    const user = User.create({ id: uuid(),name, email, password: hash });

    return { user, token: createToken.execute(user.id) }
  }
}
