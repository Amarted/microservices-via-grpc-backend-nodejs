import {
  Body,
  Controller,
  Header,
  Post,
} from '@nestjs/common';
import { UserGreetingsUseCase } from '../../../application/use-cases/UserGreetings/UserGreetingsUseCase';
import { UserGreetingsRequest } from '../../../application/use-cases/UserGreetings/UserGreetingsRequest';
import { UserGreetingsResponse } from '../../../application/use-cases/UserGreetings/UserGreetingsResponse';
import { HttpResponse } from '../../../../infrastructure/http/HttpResponse';

@Controller('api/user')
export class UserController {
  public constructor(
    private userGreetingsUseCase: UserGreetingsUseCase,
  ) {}

  @Post('greetings')
  @Header('Content-Type', 'application/json')
  public async greetings(@Body() request: UserGreetingsRequest): Promise<HttpResponse<UserGreetingsResponse>> {
    return {
      status: 'successful',
      response: await this.userGreetingsUseCase.execute(request),
    };
  }
}
