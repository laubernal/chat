import { io } from 'socket.io-client';

let socket = io('http://localhost:3000', {
  autoConnect: false,
});

export default socket;
