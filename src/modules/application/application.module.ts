import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { LoggerModule } from './logger/LoggerModule';

@Module({
  imports: [
    LoggerModule,
    UserModule,
  ],
})
export class ApplicationModule { }
