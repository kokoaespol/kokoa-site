import type { PageLoad } from "./$types";
import events from "$lib/data/events.json";

export const load = (async () => {
	return {
		title: "Eventos",
		description: "Eventos del club Kokoa",
		events,
	};
}) satisfies PageLoad;
