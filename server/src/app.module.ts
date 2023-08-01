import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ChatBoundedContext } from './Chat/Infrastructure/Nest/ChatBoundedContext';

@Module({
  imports: [CqrsModule, ChatBoundedContext],
  controllers: [],
  providers: [],
  exports: [CqrsModule],
})
export class AppModule {}
