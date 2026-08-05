import type { PageLoad } from "./$types";

export const load = (() => {
	return {
		title_key: "page.contact.title",
		description_key: "page.contact.description",
	};
}) satisfies PageLoad;
