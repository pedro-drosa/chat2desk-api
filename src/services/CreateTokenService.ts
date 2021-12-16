import jwt from "jsonwebtoken";

export default class CreateTokenService {
  public execute(key: string) {
    return jwt.sign({ id: key }, "7a5707a5235990e0db55b8e197162d10", {
      expiresIn: 86400,
    });
  }
}
