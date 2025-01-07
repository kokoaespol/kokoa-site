import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const preload_font: Handle = async ({ event, resolve }) => {
	return await resolve(event, {
		preload: ({ type }) => type === "font",
	});
};

export const handle = sequence(preload_font);
