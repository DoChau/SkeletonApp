

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.166051e0.js","_app/immutable/chunks/scheduler.6af7431e.js","_app/immutable/chunks/index.35075c1a.js","_app/immutable/chunks/singletons.4c94af56.js","_app/immutable/chunks/index.d271e0c3.js"];
export const stylesheets = [];
export const fonts = [];
