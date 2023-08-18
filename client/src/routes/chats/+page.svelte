<script lang="ts">
  import Chat from '$lib/components/Chat.svelte';
  import { io } from 'socket.io-client';

  const socket = io('http://localhost:3000', {
    autoConnect: false,
  });

  let name = '';

  const handleName = (event: any) => {
    name = event.target.value;

    // socket.auth = {
    //   name,
    // };

    // socket.connect();
  };

  let message = '';

  const handleInput = () => {
    if (message) {
      socket.emit('private message', {
        content: message,
        to: 'Adri',
      });

      message = '';
    }
  };

  socket.on('connect', () => {
    console.log('Connected to the WebSocket server', socket);
  });

  socket.on('connect_error', err => {
    if (err.message === 'invalid username') {
      console.log('INVALID USERNAME');
      // socket.off("connect_error");
    }
  });

  socket.on('connect_error', () => {
    console.log('ERROR CONNECTING...');
  });
</script>

<main>
  <h1>Chat app</h1>

  <body>
       <Chat />
  </body>
</main>

<style>
  main {
    text-align: center;
    margin: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
</style>
