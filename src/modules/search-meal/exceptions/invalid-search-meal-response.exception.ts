import { ApplicationException } from '../../../common/exceptions/application.exception';

export class InvalidSearchMealResponseException extends ApplicationException {
  name = 'Invalid search meal response';
}
