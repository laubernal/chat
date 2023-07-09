import { Filter } from 'src/Shared/Domain/Entity/Filter';
import { Participant } from '../Entity/Participant';

export class ChatFilter extends Filter {
  public static CHAT_ID_FILTER = 'id';
  public static CHAT_PARTICIPANT_FILTER = 'participant';

  public static build(): ChatFilter {
    return new ChatFilter();
  }

  protected data: Map<string, any> = new Map();

  public apply(): Map<string, any> {
    return this.data;
  }

  public withParticipant(participant: Participant): this {
    this.data.set(ChatFilter.CHAT_PARTICIPANT_FILTER, participant);
    return this;
  }
}
