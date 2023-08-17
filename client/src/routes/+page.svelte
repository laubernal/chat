<script lang="ts">
  import Authentication from '$lib/components/Authentication.svelte';
</script>

<main>
  <h1>Welcome to Chat app</h1>

  <body>
    <Authentication />
  </body>
</main>

<style>
  main {
    text-align: center;
    margin-top: 300px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  h1 {
    margin-bottom: 90px;
  }
</style>
