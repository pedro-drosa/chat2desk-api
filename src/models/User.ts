import IUser from "../interfaces/IUser";

class User {
  private users: IUser[];

  constructor() {
    this.users = [];
  }

  public create(user: IUser) {
    this.users.push(user);
    return this.users[this.users.length - 1];
  }

  public delete(id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
    return;
  }

  public find() {
    return this.users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  }

  public findByEmail(email: string) {
    return this.users.filter((data) => data.email === email)[0];
  }
}

export default new User();
