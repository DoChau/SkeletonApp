

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9ea80a48.js","_app/immutable/chunks/scheduler.ffc83710.js","_app/immutable/chunks/index.23e6a4b2.js"];
export const stylesheets = ["_app/immutable/assets/2.19523b36.css"];
export const fonts = [];
