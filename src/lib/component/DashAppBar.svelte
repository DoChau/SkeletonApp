<script lang="ts">
	import '/src/app.postcss';
	import { browser } from '$app/environment';

    // Types
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
    
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	//Display user menu
	import { Avatar } from '@skeletonlabs/skeleton';

	// Components & Utilities
	import { AppBar, LightSwitch, popup, getModalStore } from '@skeletonlabs/skeleton';

	//iconify
	import 'iconify-icon';

    // Stores
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	// Local
	let isOsMac = false;
	const modalStore = getModalStore();

	// Set Search Keyboard Shortcut
	if (browser) {
		let os = navigator.userAgent;
		isOsMac = os.search('Mac') !== -1;
	}

	// Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'dash-sidenav' };
		drawerStore.open(s);
	}

	let currentTile: number = 0;
</script>

<AppBar>
    <svelte:fragment slot="lead">
        <!-- Hamburger Menu -->
		<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
			<i class="fa-solid fa-bars text-xl" />
		</button>	
        
        <strong class="text-xl uppercase">Booking App</strong>
    </svelte:fragment>
    <svelte:fragment slot="trail">
                        
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://booking"
            target="_blank"
            rel="noreferrer"
        >
            Booking
        </a>
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://Blog"
            target="_blank"
            rel="noreferrer"
        >
            Blog
        </a>
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://Chat"
            target="_blank"
            rel="noreferrer"
        >
            Chat
        </a>

        <button type="button" class="btn btn variant-ghost-surface">
            <iconify-icon icon="ic:outline-message" ></iconify-icon>
        </button>

        <div class="relative inline-block">
        <span 
            class="badge-icon variant-filled-warning absolute -top-2 -right-2 z-10">2
        </span>
            <Avatar 
            src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop" 
            width="w-8" rounded="rounded-full" 
            />
        </div>
        
        <LightSwitch />
    </svelte:fragment>
</AppBar>