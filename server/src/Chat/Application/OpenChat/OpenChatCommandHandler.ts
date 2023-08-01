import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { OpenChatCommand } from './OpenChatCommand';
import { IChatRepository } from 'src/Chat/Domain/Repository/IChatRepository';
import { Chat } from 'src/Chat/Domain/Entity/Chat';
import { Participant } from 'src/Chat/Domain/Entity/Participant';
import { Name } from 'src/Shared/Domain/Vo/Name';
import { ChatFilter } from 'src/Chat/Domain/Filter/ChatFilter';
import { ChatAlreadyExists } from 'src/Chat/Domain/Error/ChatAlreadyExistsError';
import { OpenChatResponse } from './OpenChatResponse';
import { ICHAT_REPOSITORY } from 'src/Shared/constants';

@CommandHandler(OpenChatCommand)
export class OpenChatCommandHandler {
  constructor(
    @Inject(ICHAT_REPOSITORY) private readonly repository: IChatRepository,
  ) {}

  public async execute(
    command: OpenChatCommand,
  ): Promise<OpenChatResponse | undefined> {
    try {
      const participant = Participant.build(
        new Name(command.participantName),
        command.participantPhone,
      );

      const chat = await this.findChat(participant);

      if (typeof chat !== 'undefined') {
        return OpenChatResponse.toResponse(chat);
      }

      const newChat = Chat.build([], participant);

      await this.repository.save(newChat);
    } catch (error: any) {
      if (error instanceof ChatAlreadyExists) {
        return;
      }
    }
  }

  private async findChat(participant: Participant): Promise<Chat> {
    const filter = ChatFilter.build().withParticipant(participant);

    const result = await this.repository.findOne(filter);

    return result;
  }
}
