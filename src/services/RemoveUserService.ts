import User from "../models/User";

export default class RemoveUserService {
  public execute(id: string) {
    const user = User.delete(id);
    return user;
  }
}
