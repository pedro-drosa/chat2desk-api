import jwt from 'jsonwebtoken';

export default class CreateTokenService {
  public execute(key: string) {
    return jwt.sign({id: key}, process.env.JWT_SECRET as string, {
      expiresIn: 86400
    });
  }
}