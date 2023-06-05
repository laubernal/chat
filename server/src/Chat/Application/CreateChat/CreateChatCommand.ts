import { ICommand } from '@nestjs/cqrs';

export class CreateChatCommand implements ICommand {
  public static fromJson(body: any): CreateChatCommand {
    return new CreateChatCommand(body.participants);
  }

  constructor(private readonly _participants: string[]) {}

  public get participants(): string[] {
    return this._participants;
  }
}
