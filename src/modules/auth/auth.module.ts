import { Module } from '@nestjs/common';
import { RegistrationController } from './infrastructure/http/registration.controller';
import { RegistrationService } from './domain/services/registration/RegistrationService';
import { UserDatabaseRepository } from './infrastructure/database/repositories/UserDatabaseRepository';
import { UserRegistrationUseCase } from './application/use-cases/UserRegistration/UserRegistrationUseCase';
import { UserRepository } from './domain/interfaces/UserRepository';

@Module({
  controllers: [RegistrationController],
  providers: [
    UserRegistrationUseCase,
    RegistrationService,
    {
      provide: UserRepository,
      useClass: UserDatabaseRepository,
    },
  ]
})
export class AuthModule { }
