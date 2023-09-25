

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f6f8e2cc.js","_app/immutable/chunks/scheduler.ffc83710.js","_app/immutable/chunks/index.23e6a4b2.js","_app/immutable/chunks/index.c9f561ed.js"];
export const stylesheets = ["_app/immutable/assets/0.3da404be.css"];
export const fonts = [];
