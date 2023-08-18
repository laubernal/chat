<script lang="ts">
  import { goto } from '$app/navigation';
  import socket from '$lib/utils/Socket';
  import { redirect } from '@sveltejs/kit';
  import { username } from '../../stores/AuthenticationStores';
  import { onDestroy } from 'svelte';

  let message = '';

  //   $: if ($username === '') {
  //     console.log('No username', socket.disconnected);
  //     throw redirect(300, '/');
  //   }

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
</script>

<div>
  <body>
    <h1>Hi, {$username}</h1>
    <div>
      <ul id="messages">
        <li style="display: none;" />
      </ul>
    </div>

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
  }

  #messageInput {
    width: 90vw;
  }

  #submitButton {
    margin-left: 5px;
  }
</style>
