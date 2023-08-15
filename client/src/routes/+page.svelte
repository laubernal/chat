<script lang="ts">
  import { io } from 'socket.io-client';

  const socket = io('http://localhost:3000', {
    autoConnect: false,
  });

  let name = '';

  const handleName = (event: any) => {
    name = event.target.value;

    socket.auth = {
      name,
    };

    socket.connect();
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

  socket.on('private message', function ({ content, from }) {
    let item = document.createElement('li');

    item.textContent = content;

    const messages = document.getElementById('messages');

    messages!.appendChild(item);

    window.scrollTo(0, document.body.scrollHeight);
  });

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

<body>
  <h1>Chat app</h1>

  <p>Select your name</p>

  <select id="name" on:change={handleName}>
    <option disabled selected value>-- Select your name --</option>
    <option value="Laura">Laura</option>
    <option value="Adri">Adri</option>
  </select>

  <ul id="messages" />

  <form id="form" action="" on:submit|preventDefault={handleInput}>
    <p>Enter your message</p>
    <input id="input" autocomplete="off" bind:value={message} />
    <button type="submit">Send</button>
  </form>
</body>

<style>
  button {
    margin-left: 50;
  }

  body {
    margin: 5;
    padding-bottom: 3rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  #messages {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  #messages > li {
    padding: 0.5rem 1rem;
  }

  #messages > li:nth-child(odd) {
    background: #efefef;
  }
</style>
