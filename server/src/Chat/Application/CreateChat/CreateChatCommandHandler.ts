import { CommandHandler } from '@nestjs/cqrs';
import { CreateChatCommand } from './CreateChatCommand';
import { IChatRepository } from 'src/Chat/Domain/Repository/IChatRepository';
import { Chat } from 'src/Chat/Domain/Entity/Chat';
import { Participant } from 'src/Chat/Domain/Entity/Participant';
import { Name } from 'src/Shared/Domain/Vo/Name';

@CommandHandler(CreateChatCommand)
export class CreateChatCommandHandler {
  constructor(private readonly repository: IChatRepository) {}

  public async execute(command: CreateChatCommand) {
    const participant = Participant.build(
      new Name(command.participantName),
      command.participantPhone,
    );

    // TODO: Guard clause to ensure not exists a chat with the same participant

    const chat = Chat.build([], [participant]);

    await this.repository.save(chat);
  }
}
