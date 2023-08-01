import { Body, Controller, Post, Res, Get } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { OpenChatCommand } from 'src/Chat/Application/OpenChat/OpenChatCommand';
import { OpenChatApiRequest } from './OpenChatApiRequest';
import { Response } from 'express';

@Controller()
export class OpenChatController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get('/')
  // @Post('/chats)
  public async open(
    @Body() body: OpenChatApiRequest,
    @Res() res: Response,
  ): Promise<void> {
    const command = OpenChatCommand.fromJson(body);

    await this.commandBus.execute(command);

    res.sendFile('index.html', { root: 'public' });
  }
}
