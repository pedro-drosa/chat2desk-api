import jwt from 'jsonwebtoken';

import {Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.status(401).json({error: 'authentication error'});
  }

  const [, token] = authHeader.split(' ')

  jwt.verify(token, '7a5707a5235990e0db55b8e197162d10', (error, decoded)=>{
    
    if(error) {
      return res.status(401).json({error: 'authentication failed'});
    }

    req.userId = decoded?.id;
    return next();
  })
}