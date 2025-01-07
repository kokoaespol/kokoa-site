import type { PageLoad } from "./$types";
import members from "$lib/data/members.json";

export const load = (async () => {
	return {
		title: "Miembros",
		description: "Miembros del club Kokoa",
		members,
	};
}) satisfies PageLoad;
