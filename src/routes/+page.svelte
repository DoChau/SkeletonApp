<script>
	import { onMount, afterUpdate } from 'svelte';
	import { goto } from '$app/navigation';

	//*let isAuthenticated = getItem('access_token');

	onMount(() => {
			goto(`/dashboard`)
	});

</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

