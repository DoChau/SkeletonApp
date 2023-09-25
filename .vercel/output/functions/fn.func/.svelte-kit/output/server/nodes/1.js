

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d3cbd11e.js","_app/immutable/chunks/scheduler.ffc83710.js","_app/immutable/chunks/index.23e6a4b2.js","_app/immutable/chunks/singletons.07b421dd.js","_app/immutable/chunks/index.c9f561ed.js"];
export const stylesheets = [];
export const fonts = [];
