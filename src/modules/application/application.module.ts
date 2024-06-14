import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { LoggerModule } from './logger/LoggerModule';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from 'mikro-orm.config';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    LoggerModule,
    UserModule,
  ],
})
export class ApplicationModule { }
