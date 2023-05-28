import { BaseEntity } from 'src/Shared/Domain/Entity/BaseEntity';
import { Id } from 'src/Shared/Domain/Vo/Id';

export class Participant extends BaseEntity {
  constructor(
    _id: Id,
    private readonly name: string,
    private readonly phone: any,
    _createdAt?: Date,
    _updatedAt?: Date,
  ) {
    super(_id, _createdAt, _updatedAt);
  }
}
