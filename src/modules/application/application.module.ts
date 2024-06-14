import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { LoggerModule } from './logger/LoggerModule';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from 'mikro-orm.config';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    LoggerModule,
    UserModule,
    AuthModule,
  ],
})
export class ApplicationModule { }
