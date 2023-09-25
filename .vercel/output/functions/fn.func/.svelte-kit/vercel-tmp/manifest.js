export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Quicksand.ttf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.fc5bb3eb.js","app":"_app/immutable/entry/app.63f071dc.js","imports":["_app/immutable/entry/start.fc5bb3eb.js","_app/immutable/chunks/scheduler.ffc83710.js","_app/immutable/chunks/singletons.07b421dd.js","_app/immutable/chunks/index.c9f561ed.js","_app/immutable/entry/app.63f071dc.js","_app/immutable/chunks/scheduler.ffc83710.js","_app/immutable/chunks/index.23e6a4b2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
