<script lang="ts">
  import { username } from '../../stores/AuthenticationStores';
  import { goto } from '$app/navigation';
  import socket from '$lib/utils/Socket';

  const handleSubmit = () => {
    if ($username !== '') {
      socket.auth = {
        $username,
      };

      socket.connect();

      goto('/chats');
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input
    id="name"
    type="text"
    autocomplete="off"
    placeholder="Enter your name"
    bind:value={$username}
  />
  <button type="submit">Send</button>
</form>
