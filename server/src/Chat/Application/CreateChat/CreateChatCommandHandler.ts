import { CommandHandler } from '@nestjs/cqrs';
import { CreateChatCommand } from './CreateChatCommand';

@CommandHandler(CreateChatCommand)
export class CreateChatCommandHandler {
  constructor() {}

  public async execute(command: CreateChatCommand) {}
}
