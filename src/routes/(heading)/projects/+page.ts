import type { PageLoad } from "./$types";
import projects from "$lib/data/projects.json";

export const load = (async () => {
	return {
		title: "Proyectos",
		description: "Proyectos del club Kokoa",
		projects,
	};
}) satisfies PageLoad;
