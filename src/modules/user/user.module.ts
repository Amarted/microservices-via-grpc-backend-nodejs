import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/http/user/user.controller';
import { UserGreetingsUseCase } from './application/use-cases/UserGreetings/UserGreetingsUseCase';

@Module({
  controllers: [
    UserController,
  ],
  providers: [
    UserGreetingsUseCase,
  ],
})
export class UserModule { }
