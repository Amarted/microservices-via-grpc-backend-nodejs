import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/http/user/user.controller';
import { UserGreetingsUseCase } from './application/use-cases/UserGreetings/UserGreetingsUseCase';
import { GreetingService } from './domain/services/GreetingService';
import { ClientsModule } from '@nestjs/microservices';
import { greetingsServiceGrpcConfiguration } from './infrastructure/grpc/configuration/greetings-service-configuration';
import { GreetingsService } from './infrastructure/grpc/services/GreetingsService';

@Module({
  controllers: [
    UserController,
  ],
  providers: [
    UserGreetingsUseCase,
    {
      provide: GreetingService,
      useClass: GreetingsService,
    },
  ],
  imports: [
    ClientsModule.register([
      greetingsServiceGrpcConfiguration,
    ]),
  ],
})
export class UserModule { }
