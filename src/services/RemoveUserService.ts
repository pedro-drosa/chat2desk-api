import User from "../models/User";

export default class RemoveUserService {
  public execute(id: string) {
    User.delete(id);
    return;
  }
}
