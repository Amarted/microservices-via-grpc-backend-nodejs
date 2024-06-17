import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../application/types/UseCase';
import { EnsureRequestContext } from '@mikro-orm/core';
import { UserSignInResponse } from './UserSignInResponse';
import { UserSignInRequest } from './UserSignInRequest';
import { SignInService } from '../../../domain/services/sign-in/SignInService';

@Injectable()
export class UserSignInUseCase implements UseCase<UserSignInRequest, UserSignInResponse | Error> {
  public constructor(
    private registratiosignInServiceService: SignInService,
  ) { }

  @EnsureRequestContext()
  public async execute({
    username, password,
  }: UserSignInRequest): Promise<UserSignInResponse | Error> {
    return await this.registratiosignInServiceService.signIn(username, password);
  }
}
