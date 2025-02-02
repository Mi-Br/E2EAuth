<script lang="ts">
    import type { ActionData } from './$types';
    
    export let form: ActionData;
</script>


<h1>Login Test</h1>

<form action="/login" method="post">
    <input type="text" name="email" placeholder="Email" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Login</button>
</form>


{#if form?.success}
    <div class="success">
        <p>{form.message}</p>
        {#if form.user}
            <div class="user-info">
                <p>Welcome, {form.user.username}!</p>
                <p>Email: {form.user.email}</p>
            </div>
        {/if}
    </div>
{/if}