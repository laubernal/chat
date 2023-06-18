import { IRepository } from 'src/Shared/Domain/Interface/IRepository';
import { Chat } from '../Entity/Chat';

export interface IChatRepository extends IRepository<Chat> {}
