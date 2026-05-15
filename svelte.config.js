import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		experimental: {
			remoteFunctions: true,
			forkPreloads: true,
			handleRenderingErrors: true,
		},
		// TODO: Uncomment this when ready
		// prerender: {
		//     origin: ""
		// }
	},
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes("node_modules") ? undefined : true),
		experimental: {
			async: true,
		},
	},
};

export default config;
