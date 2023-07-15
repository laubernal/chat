import { AggregateRoot } from 'src/Shared/Domain/Entity/AggregateRoot';
import { Id } from 'src/Shared/Domain/Vo/Id';
import { Message } from './Message';
import { Participant } from './Participant';

export class Chat extends AggregateRoot {
  public static build(messages: Message[], participant: Participant): Chat {
    return new Chat(Id.generate(), messages, participant);
  }

  constructor(
    _id: Id,
    private readonly _messages: Message[],
    private readonly _participant: Participant,
    _createdAt?: Date,
    _updatedAt?: Date,
  ) {
    super(_id);
  }

  public messages(): Message[] {
    return this._messages;
  }

  public participant(): Participant {
    return this._participant;
  }
}
