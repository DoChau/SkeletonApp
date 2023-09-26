<script lang="ts">
	import { page } from '$app/stores';
	//import DocsIcon from '$lib/components/DocsIcon/DocsIcon.svelte';
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { menuNavLinks } from '$lib/links';

	// Local
	let currentRailCategory: keyof typeof menuNavLinks | undefined = undefined;
	const drawerStore = getDrawerStore();

	function onClickAnchor(): void {
		currentRailCategory = undefined;
		drawerStore.close();
	}

	// Lifecycle
	page.subscribe((page) => {
		// ex: /basePath/...
		let basePath: string = page.url.pathname.split('/')[1];
		if (!basePath) return;
		// Translate base path to link section
		if (['overview', 'compare'].includes(basePath)) currentRailCategory = '/overview';
		if (['Appointment', 'Todo'].includes(basePath)) currentRailCategory = '/schedule';
		if (['Service', 'Customer', 'Employee'].includes(basePath)) currentRailCategory = '/user';
		if (['Invoices', 'Report'].includes(basePath)) currentRailCategory = '/accountant';
		if (['Online Chat', 'Text messages','Email'].includes(basePath)) currentRailCategory = '/message';
	});

	// Reactive
	$: submenu = menuNavLinks[currentRailCategory ?? '/dash'];
	$: listboxItemActive = (href: string) => ($page.url.pathname?.includes(href) ? 'bg-primary-active-token' : '');
</script>

<div class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 {$$props.class ?? ''}">
	<!-- App Rail -->
	<AppRail background="bg-transparent" border="border-r border-surface-500/30">
		<!-- Mobile Only -->
		<!-- prettier-ignore -->
		<AppRailAnchor href="/" class="lg:hidden" on:click={() => { onClickAnchor() }}>
			<svelte:fragment slot="lead"><i class="ri:edge-new-line"/></svelte:fragment>
			<span>Booking</span>
		</AppRailAnchor>
		<!-- prettier-ignore -->
		<AppRailAnchor href="/" target="_blank" class="lg:hidden" on:click={() => { onClickAnchor() }}>
			<svelte:fragment slot="lead"><i class="icomoon-free:blog"/></svelte:fragment>
			<span>Blog</span>
		</AppRailAnchor>

		<!-- --- / --- -->
		<AppRailTile bind:group={currentRailCategory} name="overview" value={'/overview'}>
            <svelte:fragment slot="lead">
                <iconify-icon icon="carbon:meter" width="36" height="36"></iconify-icon>
            </svelte:fragment>
            <span>Overview</span>
            
        </AppRailTile>

        <AppRailTile bind:group={currentRailCategory} name="schedule" value={'/schedule'}>
            <svelte:fragment slot="lead">
                <iconify-icon icon="ph:calendar-duotone" width="36" height="36"></iconify-icon>
            </svelte:fragment>
            <span>Schedule</span>
        </AppRailTile>

        <AppRailTile bind:group={currentRailCategory} name="user" value={'/user'} >
            <svelte:fragment slot="lead">
                <iconify-icon icon="clarity:employee-group-line" width="36" height="36"></iconify-icon>
            </svelte:fragment>
            <span>User</span>
        </AppRailTile>

        <AppRailTile bind:group={currentRailCategory} name="accountant" value={'/accountant'} >
            <svelte:fragment slot="lead">
                <iconify-icon icon="vaadin:invoice" width="36" height="36"></iconify-icon>
            </svelte:fragment>
            <span>Payment</span>
        </AppRailTile>
        <AppRailTile bind:group={currentRailCategory} name="message" value={'/message'}>
            <svelte:fragment slot="lead">
                <iconify-icon icon="uil:message" width="36" height="36"></iconify-icon>
            </svelte:fragment>
            <span>Message</span>
        </AppRailTile>
	</AppRail>
	
	<!-- Nav Links -->
	<section class="p-4 pb-20 space-y-4 overflow-y-auto">
		{#each submenu as segment, i}
			<!-- Title -->
			<p class="font-bold pl-4 text-2xl">{segment.title}</p>
			<!-- Nav List -->
			<nav class="list-nav">
				<ul>
					{#each segment.list as { href, label, badge }}
						<li on:keypress on:click={drawerStore.close}>
							<a {href} class={listboxItemActive(href)} data-sveltekit-preload-data="hover">
								<span class="flex-auto">{@html label}</span>
								{#if badge}<span class="badge variant-filled-secondary">{badge}</span>{/if}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<!-- Divider -->
			{#if i + 1 < submenu.length}<hr class="!my-6 opacity-50" />{/if}
		{/each}
	</section>
</div>