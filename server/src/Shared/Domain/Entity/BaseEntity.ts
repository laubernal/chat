import { Id } from '../Vo/Id';

export class BaseEntity {
  constructor(
    private _id: Id,
    private _createdAt?: Date,
    private _updatedAt?: Date,
  ) {}

  public id(): Id {
    return this._id;
  }

  public createdAt(): Date {
    return this._createdAt ? this._createdAt : new Date();
  }

  public updatedAt(): Date {
    return this._updatedAt ? this._updatedAt : new Date();
  }
}
