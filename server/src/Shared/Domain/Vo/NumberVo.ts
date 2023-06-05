import { ValueObject } from './ValueObject';

export class NumberVo extends ValueObject {
  constructor(private readonly _value: number) {
    super();
  }

  protected validate(): boolean {
    if (typeof this._value === 'number') {
      return true;
    }

    return false;
  }

  public get value() {
    return this._value;
  }
}
