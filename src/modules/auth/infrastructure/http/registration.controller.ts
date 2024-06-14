import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserRegistrationUseCase } from '../../application/use-cases/UserRegistration/UserRegistrationUseCase';
import { UserRegistrationRequest } from '../../application/use-cases/UserRegistration/UserRegistrationRequest';


@Controller('api/auth/registration')
export class RegistrationController {
  public constructor(
    private registrationUseCase: UserRegistrationUseCase
  ) { }

  @Post()
  public async registration(@Body() request: UserRegistrationRequest): Promise<void> {
    const registrationResult = await this.registrationUseCase.execute(request);
    if (registrationResult instanceof Error) {
      const error = registrationResult;
      throw new HttpException(`An error has occurred during the registration process: ${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
