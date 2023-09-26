<script lang="ts">
	import '/src/app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Dash Components
	import DashAppBar from '$lib/component/DashAppBar.svelte';
	import DashSideBar from '$lib/component/DashSideBar.svelte';
	import DashDrawer from '$lib/component/DashDrawer.svelte';
	

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });


</script>

<!-- Overlays -->

<DashDrawer />

<!-- App Shell -->
<AppShell>
	<!-- App Bar Header-->
	<svelte:fragment slot="header">
		<DashAppBar/>
	</svelte:fragment>

	<!-- Side Bar Left-->
	<svelte:fragment slot="sidebarLeft">
		<DashSideBar class="hidden lg:grid w-[360px] overflow-hidden" />
	</svelte:fragment>

    <!-- Page Content -->
	<slot />

	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter">

	</svelte:fragment>

</AppShell>
