import type { PageLoad } from "./$types";
import { projects } from "$lib/data/projects.json";

export const load = (async () => {
	return {
		title: "Proyectos | KOKOA",
		description: "",
		projects,
	};
}) satisfies PageLoad;
