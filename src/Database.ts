import IUser from "./interfaces/IUser";

class Database {
  private users: IUser[];

  constructor() {
   this.users = []
  }

  public create(user: IUser) {
    this.users.push(user);
    return this.users[this.users.length - 1];
  }

  public find() {
    return this.users;
  }

  public findByEmail(value: string) {
    const data = this.users.filter(data => data.email === value);
    return data[0];
  }
}

export default new Database();
