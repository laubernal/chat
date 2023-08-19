<script lang="ts">
  import { goto } from '$app/navigation';
  import socket from '$lib/utils/Socket';
  import { username } from '../../stores/AuthenticationStores';

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
    console.log('private message');
    let item = document.createElement('li');

    item.textContent = content;

    const messages = document.getElementById('messages');

    messages!.appendChild(item);

    window.scrollTo(0, document.body.scrollHeight);
  });

  socket.on('disconnect', function (reason) {
    console.log('DISCONNECTED...', reason);
    goto('/');
  });
</script>

<div>
  <body>
    <h1>Hi, {$username}</h1>
    <div>
      <ul id="messages">
        <li style="display: none;" />
      </ul>
    </div>

    <button
      on:click={() => {
        socket.connect();
      }}>Connect</button
    >

    <button
      on:click={() => {
        socket.disconnect();
      }}>Disconnect</button
    >

    <form id="form" action="" on:submit|preventDefault={handleInput}>
      <input
        id="messageInput"
        autocomplete="off"
        placeholder="Enter your message"
        bind:value={message}
      />
      <button id="submitButton" type="submit">Send</button>
    </form>
  </body>
</div>

<style>
  body {
    text-align: left;
    margin-left: 10px;
  }

  #messages {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  #form {
    margin-top: 100px;
    display: grid;

    grid-template-columns: 1fr auto;
    gap: 10px;
    width: 100%;
  }

  #messageInput {
    padding: 10px;
    width: 100%;
  }

  #submitButton {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>
