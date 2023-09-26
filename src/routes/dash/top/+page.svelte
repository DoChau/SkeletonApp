<script>
    import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let loaded = true;

	onMount(() => {
		if (loaded) {
			goto(`/dash/overview`);
		}
	});
</script>
   