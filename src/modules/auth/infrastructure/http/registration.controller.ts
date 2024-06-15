import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { UserRegistrationUseCase } from '../../application/use-cases/UserRegistration/UserRegistrationUseCase';
import { UserRegistrationRequest } from '../../application/use-cases/UserRegistration/UserRegistrationRequest';
import { HttpResponse } from '../../../infrastructure/http/HttpResponse';

@Controller('api/auth/registration')
export class RegistrationController {
  public constructor(
    private registrationUseCase: UserRegistrationUseCase,
  ) { }

  @Post()
  public async registration(@Body() request: UserRegistrationRequest): Promise<HttpResponse<void>> {
    const registrationResult = await this.registrationUseCase.execute(request);
    if (registrationResult instanceof Error) {
      return {
        status: 'failed',
        errorMessage: registrationResult.message,
      };
    }

    return { status: 'successful' };
  }
}
