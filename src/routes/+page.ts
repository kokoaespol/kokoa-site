import type { PageLoad } from "./$types";
import events from "$lib/data/events.json";
import members from "$lib/data/members.json";

export const load = (async () => {
	return {
		title: "Inicio",
		description: "Kokoa es un club estudiantil de ESPOL.",
		events,
		members,
	};
}) satisfies PageLoad;
