import validator from 'validator';
import { StringVo } from './StringVo';

export class Password extends StringVo {
  constructor(private _password: string) {
    super(_password);
    this.validate();
  }

  protected validate(): boolean {
    return validator.isStrongPassword(this._password);
  }
}
