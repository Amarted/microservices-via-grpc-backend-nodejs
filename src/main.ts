import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/application/application.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.enableCors();
  app.enableShutdownHooks();
  await app.listen(3000);
}
bootstrap();
