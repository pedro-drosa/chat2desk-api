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

  public update(id: string, data:IUser) {
    const index = this.users.findIndex((user) => user.id === id);
    return this.users[index] = data;
  }

  public find() {
    return this.users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  }

  public findById(id: string) {
    return this.users.find((user) => user.id === id );
  }

  public findByEmail(email: string) {
    return this.users.filter((user) => user.email === email)[0];
  }
}

export default new User();
