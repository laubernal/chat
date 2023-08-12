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

  io.use((socket, next) => {
    const username = socket;

    if (!username) {
      return next(new Error('invalid username'));
    }

    socket.data.name = username;

    next();
  });

  io.on('connection', (socket) => {
    console.log('Socket connected...', socket.id);

    socket.on('private message', ({ content, to }) => {
      console.log(`Received chat message: ${content} - ${to}`);

      io.emit('private message', {
        content,
        from: socket.id,
      });
    });

    socket.on('disconnecting', (reason) => {
      console.log(`Reason for disconnecting: ${reason}`);
      for (const room of socket.rooms) {
        if (room !== socket.id) {
          socket.to(room).emit(`user ${socket.id} has left`);
        }
      }

      console.log('Disconnecting socket...', socket.rooms);
    });

    socket.on('disconnect', () => {
      // socket.rooms.size === 0
      console.log(`Socket ${socket.id} disconnected...`);
    });
  });

  httpServer.listen(3000);
}

bootstrap();
