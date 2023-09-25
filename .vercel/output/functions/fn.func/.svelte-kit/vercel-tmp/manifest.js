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
		client: {"start":"_app/immutable/entry/start.59838cc9.js","app":"_app/immutable/entry/app.d72cdf55.js","imports":["_app/immutable/entry/start.59838cc9.js","_app/immutable/chunks/scheduler.6af7431e.js","_app/immutable/chunks/singletons.4c94af56.js","_app/immutable/chunks/index.d271e0c3.js","_app/immutable/entry/app.d72cdf55.js","_app/immutable/chunks/scheduler.6af7431e.js","_app/immutable/chunks/index.35075c1a.js"],"stylesheets":[],"fonts":[]},
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
