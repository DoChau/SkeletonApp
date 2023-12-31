import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],

	server: {
		fs: {
		  // either or
		  strict: false,
		  allow: ['$lib/']
		}
	  }
});
