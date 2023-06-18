import { ICommand } from '@nestjs/cqrs';

export class CreateChatCommand implements ICommand {
  public static fromJson(body: any): CreateChatCommand {
    return new CreateChatCommand(body.name, body.phone);
  }

  constructor(
    private readonly _participantName: string,
    private readonly _participantPhone: any,
  ) {}

  public get participantName(): string {
    return this._participantName;
  }

  public get participantPhone(): any {
    return this._participantPhone;
  }
}
