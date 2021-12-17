import * as yup from "yup";
import User from "../models/User";
import generateHash from "../helpers/generatehash";
import IUser from "../interfaces/IUser";

export default class UpdateUserService {
  public async execute(id: string, update: Omit<IUser,"email">) {
    try {
      let schema = yup.object().shape({
        name: yup.string(),
        password: yup.string().min(6),
      });
  
      if (!(await schema.isValid(update))) {
        return { error: "validation error, please check the data" };
      }
      
      const user = User.findById(id);

      if(user) {
        const newUser = {
          id,
          name: update.name ? update.name : user.name,
          email: user.email,
          password: update.password ? await generateHash(update.password) : user.password
        }
        return User.update(id, newUser);
      }
      
    } catch (error) {
      return { error: "an error occurred, please try again" };
    }
  }
}
