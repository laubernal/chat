import { Inject, Injectable } from '@nestjs/common';
import { Chat } from 'src/Chat/Domain/Entity/Chat';
import { IChatRepository } from 'src/Chat/Domain/Repository/IChatRepository';

@Injectable()
export class MongooseChatRepository implements IChatRepository {
  public async find(filter: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  public async findOne(filter: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  public async save(entity: Chat): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async delete(filter: any): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async update(entity: Chat): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
