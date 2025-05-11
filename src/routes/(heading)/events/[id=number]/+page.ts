import type { PageLoad } from "./$types";
import events from "$lib/data/events.json";
import { error } from "@sveltejs/kit";

export const load = (async ({ params }) => {
	const id = Number.parseInt(params.id, 10);
	const event = events.find((event) => event.id === id);

	if (!event) {
		throw error(404, "Evento no encontrado");
	}

	return {
		title: event.name,
		description: event.description,
		event,
	};
}) satisfies PageLoad;
