<script lang="ts">
	// Global Stylesheets
	import '../app.postcss';

	// Dependency: Floating UI
	import { storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	// Dash Components
	import DashAppBar from '$lib/component/DashAppBar.svelte';
	import DashSideBar from '$lib/component/DashSideBar.svelte';
	import DashDrawer from '$lib/component/DashDrawer.svelte';
	
	// Modal Components
	import DashSearch from '$lib/modals/Dashsearch.svelte';
	// Registered list of Components for Modals
	const modalComponentRegistry: Record<string, ModalComponent> = {
		modalSearch: { ref: DashSearch },
	};

	function matchPathWhitelist(pageUrlPath: string): boolean {
		// If homepage route
		if (pageUrlPath === '/') return true;
		// If any blog route
		if (pageUrlPath.includes('/blog')) return true;
		return false;
	}

	// Scroll heading into view
	function scrollHeadingIntoView(): void {
		if (!window.location.hash) return;
		const elemTarget: HTMLElement | null = document.querySelector(window.location.hash);
		if (elemTarget) elemTarget.scrollIntoView({ behavior: 'smooth' });
	}

	// Lifecycle
	afterNavigate((params: any) => {
		// Scroll to top
		const isNewPage: boolean = params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
		// Scroll heading into view
		scrollHeadingIntoView();
	});

	// SvelteKit Imports
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

	// Types
	import type { ModalComponent } from '@skeletonlabs/skeleton';

	// Components & Utilities
	import { AppShell, Modal, Toast, initializeStores, prefersReducedMotionStore } from '@skeletonlabs/skeleton';
	initializeStores();

	// Reactive
	// Disable left sidebar on homepage
	$: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'bg-surface-50-900-token lg:w-auto';
	$: allyPageSmoothScroll = !$prefersReducedMotionStore ? 'scroll-smooth' : '';
</script>

<!-- Overlays -->
<Modal components={modalComponentRegistry} />
<Toast />
<DashDrawer />

<!-- App Shell -->
<AppShell {slotSidebarLeft} regionPage={allyPageSmoothScroll} slotFooter="bg-black p-4">
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
