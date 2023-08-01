import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { OpenChatController } from '../Controller/OpenChat/OpenChatController';
import { OpenChatCommandHandler } from 'src/Chat/Application/OpenChat/OpenChatCommandHandler';
import { MongooseChatRepository } from '../Persistance/Repository/MongooseChatRepository';
import { ICHAT_REPOSITORY } from 'src/Shared/constants';

const Controllers = [OpenChatController];

const Handlers = [OpenChatCommandHandler];

const Repositories = [
  { provide: ICHAT_REPOSITORY, useClass: MongooseChatRepository },
];

@Module({
  imports: [CqrsModule],
  controllers: [...Controllers],
  providers: [...Handlers, ...Repositories],
  exports: [],
})
export class ChatBoundedContext {}
