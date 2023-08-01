import { ICommand } from '@nestjs/cqrs';
import { OpenChatApiRequest } from 'src/Chat/Infrastructure/Controller/OpenChat/OpenChatApiRequest';

export class OpenChatCommand implements ICommand {
  public static fromJson(body: OpenChatApiRequest): OpenChatCommand {
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
