import { AggregateRoot } from 'src/Shared/Domain/Entity/AggregateRoot';
import { Id } from 'src/Shared/Domain/Vo/Id';
import { Message } from './Message';
import { Participant } from './Participant';

export class Chat extends AggregateRoot {
  public static build(messages: Message[], participants: Participant[]): Chat {
    return new Chat(Id.generate(), messages, participants);
  }

  constructor(
    _id: Id,
    private readonly _messages: Message[],
    private readonly _participants: Participant[],
    _createdAt?: Date,
    _updatedAt?: Date,
  ) {
    super(_id);
  }

  public messages(): Message[] {
    return this._messages;
  }

  public participants(): Participant[] {
    return this._participants;
  }
}
