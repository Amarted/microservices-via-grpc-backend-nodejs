import {
  ClientProviderOptions, Transport,
} from '@nestjs/microservices';
import { join } from 'path';

export const greetingsGrpcServiceName = 'UserGreetingRpcService';

export const greetingsServiceGrpcConfiguration: ClientProviderOptions = {
  name: greetingsGrpcServiceName,
  transport: Transport.GRPC,
  options: {
    package: 'Api.GrpcProto',
    url: '0.0.0.0:50051',
    protoPath: join(__dirname, '../proto-buffers/UserGreetingsRpcService.proto'),
  },
};
