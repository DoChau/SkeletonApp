<script lang="ts">
	import { getDrawerStore, Drawer } from '@skeletonlabs/skeleton';
	import DashSidebar from '$lib/component/DashSideBar.svelte';

	const drawerStore = getDrawerStore();

	$: classesDrawer = $drawerStore.id === 'dash-sidenav' ? 'lg:hidden' : '';
</script>

<Drawer class={classesDrawer}>
	{#if $drawerStore.id === 'dash-sidenav'}
		<!-- Dash Sidebar -->
		<DashSidebar embedded={true} />
	{:else if $drawerStore.id === 'demo'}
		<!-- Drawer Dash Demos -->
		<div class="w-full h-full flex justify-center items-center">
			<div class="text-center space-y-2">
				{#if $drawerStore.meta}<h2 class="h2">{$drawerStore.meta}</h2>{/if}
				<h4 class="h4">Drawer: <span class="capitalize">{$drawerStore.position}</span></h4>
				<span class="block">Tap outside the drawer to close.</span>
			</div>
		</div>
	{:else}
		<!-- Fallback Error -->
		<div class="w-full h-full flex justify-center items-center">
			<div class="text-center space-y-2">
				<p>Invalid <code class="code">$drawerStore.id</code> provided.</p>
			</div>
		</div>
	{/if}
</Drawer>