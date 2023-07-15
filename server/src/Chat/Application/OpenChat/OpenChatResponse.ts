import { Chat } from 'src/Chat/Domain/Entity/Chat';
import { Message } from 'src/Chat/Domain/Entity/Message';
import { Participant } from 'src/Chat/Domain/Entity/Participant';
import { messageType, participantType } from 'src/Shared/Infrastructure/Types';

export class OpenChatResponse {
  public static toResponse(entity: Chat): OpenChatResponse {
    const messages: messageType[] = entity
      .messages()
      .map((message: Message) => {
        const sender = {
          id: message.sender().id().value,
          name: message.sender().name().value,
          phone: message.sender().phone(),
        };

        const recipients = message
          .recipients()
          .map((recipient: Participant) => {
            return {
              id: recipient.id().value,
              name: recipient.name().value,
              phone: recipient.phone(),
            };
          });

        return {
          id: message.id().value,
          message: message.message(),
          messageType: message.messageType(),
          sender,
          recipients,
        };
      });

    const participant = {
      id: entity.participant().id().value,
      name: entity.participant().name().value,
      phone: entity.participant().phone(),
    };

    return new OpenChatResponse(entity.id().value, messages, participant);
  }

  constructor(
    _id: string,
    _messages: messageType[],
    _participant: participantType,
  ) {}
}
