import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { Server } from 'socket.io';
import * as http from 'http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(express.static('public'));

  const expressApp = app.getHttpAdapter().getInstance();

  const httpServer = http.createServer(expressApp);

  const io = new Server(httpServer);

  io.on('connection', (socket) => {
    console.log('Socket connected...', socket.id);

    socket.on('chat message', (msg) => {
      console.log('Received chat message:', msg);
      io.emit('chat message', msg);
    });

    socket.on('disconnecting', (reason) => {
      console.log(reason);
      for (const room of socket.rooms) {
        if (room !== socket.id) {
          socket.to(room).emit('user has left', socket.id);
        }
      }

      console.log('Disconnecting socket...', socket.rooms);
    });

    socket.on('disconnect', () => {
      // socket.rooms.size === 0
      console.log('Socket disconnected...');
    });
  });

  httpServer.listen(3000);
}

bootstrap();
