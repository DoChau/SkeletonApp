

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ec38b881.js","_app/immutable/chunks/scheduler.6af7431e.js","_app/immutable/chunks/index.35075c1a.js","_app/immutable/chunks/index.d271e0c3.js"];
export const stylesheets = ["_app/immutable/assets/0.0fe9afb3.css"];
export const fonts = [];
