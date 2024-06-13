import { Body, Controller, Post } from '@nestjs/common';
import { UserGreetingsUseCase } from '../../../application/use-cases/UserGreetings/UserGreetingsUseCase';
import { UserGreetingsRequest } from '../../../application/use-cases/UserGreetings/UserGreetingsRequest';

@Controller('api/user')
export class UserController {
  public constructor(
    private userGreetingsUseCase: UserGreetingsUseCase,
  ) {}

  @Post('greetings')
  public greetings(@Body() request: UserGreetingsRequest): string {
    return this.userGreetingsUseCase.execute(request);
  }
}
