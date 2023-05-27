import { AggregateRoot } from 'src/Shared/Domain/Entity/AggregateRoot';
import { Id } from 'src/Shared/Domain/Vo/Id';

export class Chat extends AggregateRoot {
  public build(messages: string[], participants: string): Chat {
    return new Chat(Id.generate(), messages, participants);
  }

  constructor(
    _id: Id,
    private readonly _messages: string[],
    private readonly _participants: string,
  ) {
    super(_id);
  }

  public messages(): string[] {
    return this._messages;
  }

  public participants(): string {
    return this._participants;
  }
}
