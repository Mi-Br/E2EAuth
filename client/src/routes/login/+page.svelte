<script lang="ts">
	import { enhance } from "$app/forms";
    
    
    let {data, form} = $props();

    // export the data provided by SvelteKit (which includes our action return)

    console.log('receiverd Page data:', data);
  </script>
  
  <h1>Login Test</h1>
  
  <form method="post" use:enhance>
    <input type="text" name="email" placeholder="Email" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
  
  {#if form?.success}
     <p>Successfully logged in! Welcome back, {form.result.firstName}</p>
 {/if}
 {#if !form?.success}
     <p>Login  failed: {form?.error}</p>
 {/if}