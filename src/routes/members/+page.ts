import type { PageLoad } from "./$types";
import members from "$lib/data/members.json";
export const load = (async () => {
	return {
		title: "Chocomiembros",
		// TODO: fetch from API
		description: "Miembros del club Kokoa",
		members,
	};
}) satisfies PageLoad;
