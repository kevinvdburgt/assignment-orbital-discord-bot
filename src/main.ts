import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async (): Promise<void> => {
  await NestFactory.createApplicationContext(AppModule);
};

bootstrap().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});
