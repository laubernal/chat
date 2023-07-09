import { CommandHandler } from '@nestjs/cqrs';
import { CreateChatCommand } from './CreateChatCommand';
import { IChatRepository } from 'src/Chat/Domain/Repository/IChatRepository';
import { Chat } from 'src/Chat/Domain/Entity/Chat';
import { Participant } from 'src/Chat/Domain/Entity/Participant';
import { Name } from 'src/Shared/Domain/Vo/Name';
import { ChatFilter } from 'src/Chat/Domain/Filter/ChatFilter';
import { ChatAlreadyExists } from 'src/Chat/Domain/Error/ChatAlreadyExistsError';

@CommandHandler(CreateChatCommand)
export class CreateChatCommandHandler {
  constructor(private readonly repository: IChatRepository) {}

  public async execute(command: CreateChatCommand) {
    try {
      const participant = Participant.build(
        new Name(command.participantName),
        command.participantPhone,
      );

      await this.ensureChatNotExists(participant);

      const chat = Chat.build([], [participant]);

      await this.repository.save(chat);
    } catch (error: any) {
      if (error instanceof ChatAlreadyExists) {
        return;
      }
    }
  }

  private async ensureChatNotExists(participant: Participant): Promise<void> {
    const filter = ChatFilter.build().withParticipant(participant);

    const result = await this.repository.findOne(filter);

    if (typeof result !== 'undefined') {
      throw new ChatAlreadyExists();
    }
  }
}
