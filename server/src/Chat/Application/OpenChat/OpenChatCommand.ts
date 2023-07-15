import { ICommand } from '@nestjs/cqrs';

export class OpenChatCommand implements ICommand {
  public static fromJson(body: any): OpenChatCommand {
    return new OpenChatCommand(body.name, body.phone);
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
