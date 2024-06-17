import { Module } from '@nestjs/common';
import { RegistrationController } from './infrastructure/http/registration.controller';
import { RegistrationService } from './domain/services/registration/RegistrationService';
import { UserDatabaseRepository } from './infrastructure/database/repositories/UserDatabaseRepository';
import { UserRegistrationUseCase } from './application/use-cases/UserRegistration/UserRegistrationUseCase';
import { UserRepository } from './domain/interfaces/UserRepository';
import { AccessService } from './application/services/AccessService';
import { UserSignInController } from './infrastructure/http/sign-in.controller';
import { SignInService } from './domain/services/sign-in/SignInService';
import { UserSignInUseCase } from './application/use-cases/UserSignInUseCase/UserSignInUseCase';

@Module({
  controllers: [
    RegistrationController,
    UserSignInController,
  ],
  providers: [
    UserRegistrationUseCase,
    UserSignInUseCase,
    RegistrationService,
    SignInService,
    AccessService,
    {
      provide: UserRepository,
      useClass: UserDatabaseRepository,
    },
  ],
  exports: [
    AccessService,
  ],
})
export class AuthModule { }
