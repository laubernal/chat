<script lang="ts">
  import { username } from '../../stores/AuthenticationStores';
  import { goto } from '$app/navigation';

  const handleSubmit = () => {
    if ($username !== '') {
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
