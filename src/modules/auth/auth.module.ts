import { Module } from '@nestjs/common';
import { RegistrationController } from './infrastructure/http/registration.controller';
import { RegistrationService } from './domain/services/registration/RegistrationService';
import { UserDatabaseRepository } from './infrastructure/database/repositories/UserDatabaseRepository';
import { UserRegistrationUseCase } from './application/use-cases/UserRegistration/UserRegistrationUseCase';
import { UserRepository } from './domain/interfaces/UserRepository';
import { JwtModule } from '@nestjs/jwt';
import { AccessService } from './application/services/AccessService';

@Module({
  controllers: [
    RegistrationController,
  ],
  providers: [
    UserRegistrationUseCase,
    RegistrationService,
    AccessService,
    {
      provide: UserRepository,
      useClass: UserDatabaseRepository,
    },
  ],
  exports: [
    AccessService,
  ],
  imports: [
    JwtModule.register({ secret: process.env.jwtSecret }),
  ],
})
export class AuthModule { }
