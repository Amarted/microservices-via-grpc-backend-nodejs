import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/http/user/user.controller';
import { UserGreetingsUseCase } from './application/use-cases/UserGreetings/UserGreetingsUseCase';
import { GreetingService } from './domain/services/GreetingService';

@Module({
  controllers: [
    UserController,
  ],
  providers: [
    UserGreetingsUseCase,
    GreetingService,
  ],
})
export class UserModule { }
