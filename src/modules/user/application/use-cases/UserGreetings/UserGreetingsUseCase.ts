import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../application/types/UseCase';
import { UserGreetingsRequest } from './UserGreetingsRequest';
import { UserGreetingsResponse } from './UserGreetingsResponse';
import { GreetingService } from '../../../domain/services/GreetingService';

@Injectable()
export class UserGreetingsUseCase implements UseCase<UserGreetingsRequest, UserGreetingsResponse> {

  public constructor(
    private greetingsService: GreetingService,
  ) { }

  public execute({ username }: UserGreetingsRequest): UserGreetingsResponse {
    const greetings = this.greetingsService.greet(username);
    return { greetings };
  }
}
