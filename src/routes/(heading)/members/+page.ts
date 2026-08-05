import type { PageLoad } from "./$types";
import members from "$lib/data/members.json";

export const load = (() => {
	return {
		title_key: "page.members.title",
		description_key: "page.members.description",
		members,
	};
}) satisfies PageLoad;
