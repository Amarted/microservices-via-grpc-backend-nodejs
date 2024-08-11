import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../application/types/UseCase';
import { UserGreetingsRequest } from './UserGreetingsRequest';
import { UserGreetingsResponse } from './UserGreetingsResponse';
import { GreetingService } from '../../../domain/services/GreetingService';

@Injectable()
export class UserGreetingsUseCase implements UseCase<UserGreetingsRequest, Promise<UserGreetingsResponse>> {

  public constructor(
    private greetingsService: GreetingService,
  ) { }

  public async execute({ username }: UserGreetingsRequest): Promise<UserGreetingsResponse> {
    const greetings = await this.greetingsService.greet(username);
    return { greetings };
  }
}
