import { Body, Controller, Header, Post } from '@nestjs/common';
import { UserGreetingsUseCase } from '../../../application/use-cases/UserGreetings/UserGreetingsUseCase';
import { UserGreetingsRequest } from '../../../application/use-cases/UserGreetings/UserGreetingsRequest';
import { UserGreetingsResponse } from '../../../application/use-cases/UserGreetings/UserGreetingsResponse';

@Controller('api/user')
export class UserController {
  public constructor(
    private userGreetingsUseCase: UserGreetingsUseCase,
  ) {}

  @Post('greetings')
  @Header('Content-Type','application/json')
  public greetings(@Body() request: UserGreetingsRequest): UserGreetingsResponse {
    return this.userGreetingsUseCase.execute(request);
  }
}
