import { v4 as uuidV4, validate } from 'uuid';
import { ValueObject } from './ValueObject';

export class Id extends ValueObject {
  public static generate(): Id {
    return new Id(uuidV4());
  }

  constructor(private _value: string) {
    super();

    if (this.validate(this._value)) {
      throw new Error('Incorrect ID format');
    }
  }

  public get value(): string {
    return this._value;
  }

  protected validate(value: string): boolean {
    return !validate(value);
  }
}
