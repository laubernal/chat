import { DomainError } from 'src/Shared/Domain/Error/DomainError';

export class ChatAlreadyExists extends DomainError {
  constructor() {
    super('This chat already exists');

    Object.setPrototypeOf(this, ChatAlreadyExists.prototype);
  }
}
