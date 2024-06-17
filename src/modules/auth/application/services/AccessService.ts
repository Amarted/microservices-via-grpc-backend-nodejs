import { Injectable } from '@nestjs/common';
import { AccessTokenData } from '../types/AccessTokenData';
import { HttpRequest } from '../../../infrastructure/http/HttpRequest';
import jwt from 'jsonwebtoken';

Injectable();
export class AccessService {
  public createToken(userId: string): string {
    const payload: AccessTokenData = { userId };
    if (!process.env.jwtSecret) {
      throw new Error('Set the jwtSecret variable in the .env file.');
    }

    return jwt.sign(payload, process.env.jwtSecret, { expiresIn: process.env.accessTokenExpires });
  }

  public getTokenDataFromRequest(request: HttpRequest): AccessTokenData | null {
    let tokenData: AccessTokenData | null;

    try {
      const authHeaderValue = request.headers.authorization;
      const token = authHeaderValue ? authHeaderValue.split(' ')[1] : null;
      if (token) {
        if (!process.env.jwtSecret) {
          throw new Error('Set the jwtSecret variable in the .env file.');
        }
        tokenData = jwt.verify(token, process.env.jwtSecret) as AccessTokenData;
      } else {
        tokenData = null;
      }
    } catch (error) {
      // Token is wrong or smth else - no token data
      tokenData = null;
    }

    return tokenData;
  }
}
