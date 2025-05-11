import type { PageLoad } from "./$types";
import projects from "$lib/data/projects.json";
import { error } from "@sveltejs/kit";

export const load = (async ({ params }) => {
	const id = Number.parseInt(params.id, 10);
	const project = projects.find((project) => project.id === id);

	if (!project) {
		throw error(404, "Proyecto no encontrado");
	}

	return {
		title: project.name,
		description: project.description,
		project,
	};
}) satisfies PageLoad;
