import validator from 'validator';
import { StringVo } from './StringVo';

export class Email extends StringVo {
  constructor(private _email: string) {
    super(_email);
    this.validate();
  }

  protected validate(): boolean {
    return validator.isEmail(this._email);
  }
}
