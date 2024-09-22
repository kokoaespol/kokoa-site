import type { PageLoad } from "./$types";
import { events } from "$lib/data/events.json";

export const load = (async () => {
	return {
		title: "Inicio",
		description:
			"Kokoa es un club estudiantil de ESPOL, en el que entusiastas del código libre se reunen a promover ideologías comunistas.",
		events,
	};
}) satisfies PageLoad;
