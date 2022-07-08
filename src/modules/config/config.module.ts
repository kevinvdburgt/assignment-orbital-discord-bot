import { Module } from '@nestjs/common';
import { fileLoader, TypedConfigModule } from 'nest-typed-config';
import { Config } from './config/config';
import { validate } from './utils/validate';

@Module({
  imports: [
    TypedConfigModule.forRoot({
      schema: Config,
      load: fileLoader(),
      isGlobal: true,
      validate,
    }),
  ],
})
export class ConfigModule {}
