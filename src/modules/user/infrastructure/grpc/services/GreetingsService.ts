import { ClientGrpc } from '@nestjs/microservices';
import { GreetingService as GreetingServiceInterface } from '../../../domain/services/GreetingService';
import { Inject } from '@nestjs/common';
import { GreetingsRpcService } from './interfaces/GreetingsRpcService';
import { greetingsGrpcServiceName } from '../configuration/greetings-service-configuration';
import { lastValueFrom } from 'rxjs';

export class GreetingsService implements GreetingServiceInterface {
  public constructor(
    @Inject(greetingsGrpcServiceName) private client: ClientGrpc,
  ) { }

  public async greet(username: string): Promise<string> {
    const greetingsRpcService = this.client.getService<GreetingsRpcService>(greetingsGrpcServiceName);
    const greetingsResult = await lastValueFrom(greetingsRpcService.greet({ username }));
    console.log(greetingsResult);

    return greetingsResult.greetings;
  }

}
