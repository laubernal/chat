import { ValueObject } from './ValueObject';

export class StringVo extends ValueObject {
  constructor(private readonly _value: string) {
    super();
    this.validate();
  }

  protected validate(): boolean {
    if (!this._value.trim().length) {
      return false;
    }

    return true;
  }

  get value(): string {
    return this._value.trim();
  }
}
