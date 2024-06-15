import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenData } from '../interfaces/AccessTokenData';
import { HttpRequest } from '../../../infrastructure/http/HttpRequest';

Injectable();
export class AccessService {
  public constructor(
    private jwtService: JwtService,
  ) { }

  public createToken(userId: string): string {
    const payload: AccessTokenData = { userId };
    return this.jwtService.sign(payload, { expiresIn: process.env.accessTokenExpires });
  }

  public getTokenDataFromRequest(request: HttpRequest): AccessTokenData | null {
    let tokenData: AccessTokenData | null;

    try {
      const authHeaderValue = request.headers.authorization;
      const token = authHeaderValue ? authHeaderValue.split(' ')[1] : null;
      if (token) {
        tokenData = this.jwtService.verify<AccessTokenData>(token, { secret: process.env.JwtSecret });
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
