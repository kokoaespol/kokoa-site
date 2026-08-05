import type { PageLoad } from "./$types";

export const load = (() => {
	return {
		title_key: "page.about.title",
		description_key: "page.about.description",
	};
}) satisfies PageLoad;
