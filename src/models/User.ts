import IUser from "../interfaces/IUser";

class User {
  private users: IUser[];

  constructor() {
    this.users = [{
      id: "1",
      email: "kalel@chat2desk.com",
      name: "Kalel",
      password: "123456",
    },
    {
      id: "2",
      email: "pedro@chat2desk.com",
      name: "Pedro",
      password: "123456",
    },
    {
      id: "3",
      email: "daiane@chat2desk.com",
      name: "Daiane",
      password: "123456",
    },
    {
      id: "4",
      email: "paulo@chat2desk.com",
      name: "Paulo",
      password: "123456",
    },
    {
      id: "5",
      email: "ana@chat2desk.com",
      name: "Ana",
      password: "123456",
    },];
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
