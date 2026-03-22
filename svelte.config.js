import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		experimental: {
			remoteFunctions: true,
		},
		// TODO: Uncomment this when ready
		// prerender: {
		//     origin: ""
		// }
	},
	compilerOptions: {
		experimental: {
			async: true,
		},
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) =>
			filename.includes("node_modules") ? undefined : { runes: true },
	},
};

export default config;
