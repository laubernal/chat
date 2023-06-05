import validator from 'validator';
import { StringVo } from './StringVo';

export class Phone extends StringVo {
  constructor(private _phone: string) {
    super(_phone);
    this.validate();
  }

  protected validate(): boolean {
    return validator.isMobilePhone(this._phone);
  }
}
