import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../application/types/UseCase';
import { UserGreetingsRequest } from './UserGreetingsRequest';
import { UserGreetingsResponse } from './UserGreetingsResponse';

@Injectable()
export class UserGreetingsUseCase implements UseCase<UserGreetingsRequest, UserGreetingsResponse> {
  public execute({ username: name }: UserGreetingsRequest): UserGreetingsResponse {
    return { greetings: `Hello, ${name}!` };
  }
}
