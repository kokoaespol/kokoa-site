import type { PageLoad } from "./$types";
import { events } from "$lib/data/events.json";

export const load = (async () => {
	return {
		title: "Chocoeventos",
		// TODO: fetch from API
		description: "Eventos del club Kokoa",
		events,
	};
}) satisfies PageLoad;
