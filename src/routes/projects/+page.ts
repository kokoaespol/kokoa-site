import type { PageLoad } from "./$types";
import { projects } from "$lib/data/projects.json";

export const load = (async () => {
	return {
		title: "Proyectos",
		// TODO: change this to a real description
		description: "Aquí ponemos los proyectos que nos enorgullecen... y lo que hay ¯\\_(ツ)_/¯",
		// TODO: fetch from API
		projects,
	};
}) satisfies PageLoad;
