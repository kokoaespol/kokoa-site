import type { PageLoad } from "./$types";

export const load = (() => {
	return {
		title_key: "page.join.title",
		description_key: "page.join.description",
	};
}) satisfies PageLoad;
