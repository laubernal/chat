import { BaseEntity } from 'src/Shared/Domain/Entity/BaseEntity';
import { Id } from 'src/Shared/Domain/Vo/Id';
import { Participant } from './Participant';

export class Message extends BaseEntity {
  public static build(
    message: string,
    messageType: string,
    sender: Participant,
    recipients: Participant[],
  ): Message {
    return new Message(Id.generate(), message, messageType, sender, recipients);
  }

  constructor(
    _id: Id,
    private readonly _message: string,
    private readonly _messageType: string,
    private readonly _sender: Participant,
    private readonly _recipients: Participant[],
    _createdAt?: Date,
    _updatedAt?: Date,
  ) {
    super(_id, _createdAt, _updatedAt);
  }

  public message(): string {
    return this._message;
  }

  public messageType(): string {
    return this._messageType;
  }

  public sender(): Participant {
    return this._sender;
  }

  public recipients(): Participant[] {
    return this._recipients;
  }
}
