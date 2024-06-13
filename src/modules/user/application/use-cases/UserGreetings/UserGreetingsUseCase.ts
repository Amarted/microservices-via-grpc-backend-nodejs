import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../application/interfaces/UseCase';
import { UserGreetingsRequest } from './UserGreetingsRequest';

@Injectable()
export class UserGreetingsUseCase implements UseCase<UserGreetingsRequest, string> {
  public execute({ name }: UserGreetingsRequest): string {
    return `Hello, ${name}!`;
  }
}
