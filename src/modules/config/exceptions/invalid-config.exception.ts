import { ValidationError } from '@nestjs/common';
import { TypedConfigModule } from 'nest-typed-config';
import { ApplicationException } from '../../../common/exceptions/application.exception';

export class InvalidConfigException extends ApplicationException {
  name = 'Config Validation';

  constructor(errors: ValidationError[]) {
    super(TypedConfigModule.getConfigErrorMessage(errors));
  }
}
