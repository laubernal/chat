import { BaseEntity } from 'src/Shared/Domain/Entity/BaseEntity';
import { Id } from 'src/Shared/Domain/Vo/Id';
import { Name } from 'src/Shared/Domain/Vo/Name';

export class Participant extends BaseEntity {
  public static build(name: Name, phone: any): Participant {
    return new Participant(Id.generate(), name, phone);
  }
  constructor(
    _id: Id,
    private readonly _name: Name,
    private readonly _phone: any,
    _createdAt?: Date,
    _updatedAt?: Date,
  ) {
    super(_id, _createdAt, _updatedAt);
  }

  public name(): Name {
    return this._name;
  }

  public phone(): string {
    return this._phone;
  }
}
