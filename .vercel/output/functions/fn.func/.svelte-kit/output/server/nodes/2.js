

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.80d7854c.js","_app/immutable/chunks/scheduler.6af7431e.js","_app/immutable/chunks/index.35075c1a.js"];
export const stylesheets = ["_app/immutable/assets/2.3f336446.css"];
export const fonts = [];
