import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Config } from '../config/config';
import { InvalidConfigException } from '../exceptions/invalid-config.exception';

export const validate = (raw: unknown): Config => {
  const config = plainToInstance(Config, raw);

  const errors = validateSync(config, {
    forbidUnknownValues: true,
    whitelist: true,
  });

  if (errors.length > 0) {
    throw new InvalidConfigException(errors);
  }

  return config;
};
