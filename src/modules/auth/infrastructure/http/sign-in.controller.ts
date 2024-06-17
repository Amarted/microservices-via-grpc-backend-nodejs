import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { UserSignInUseCase } from '../../application/use-cases/UserSignInUseCase/UserSignInUseCase';
import { HttpResponse } from '../../../infrastructure/http/HttpResponse';
import { UserSignInRequest } from '../../application/use-cases/UserSignInUseCase/UserSignInRequest';
import { UserSignInResponse } from '../../application/use-cases/UserSignInUseCase/UserSignInResponse';

@Controller('api/auth/sign-in')
export class UserSignInController {
  public constructor(
    private signInUseCase: UserSignInUseCase,
  ) { }

  @Post()
  public async signIn(@Body() request: UserSignInRequest): Promise<HttpResponse<UserSignInResponse>> {
    const signInResult = await this.signInUseCase.execute(request);
    if (signInResult instanceof Error) {
      return {
        status: 'failed',
        errorMessage: signInResult.message,
      };
    }

    return {
      status: 'successful',
      response: { ...signInResult },
    };
  }
}
