import { AggregateRoot as NestAggregateRoot } from '@nestjs/cqrs';
import { Id } from '../Vo/Id';

export class AggregateRoot extends NestAggregateRoot {
  protected constructor(
    private readonly _id: Id,
    private readonly _createdAt: Date = new Date(),
    private readonly _updatedAt: Date = new Date(),
  ) {
    super();
  }

  public id(): Id {
    return this._id;
  }

  public createdAt(): Date {
    return this._createdAt;
  }

  public updatedAt(): Date {
    return this._updatedAt;
  }
}
