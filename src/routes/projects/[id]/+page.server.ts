import type { PageServerLoad } from "./$types";
import data from "$lib/data/projects.json";

export const load: PageServerLoad = async ({ params }) => {
	const id = parseInt(params.id);
	const project = data.projects.find((p) => p.id === id)!;
	return {
		title: `${project?.name} | KOKOA`,
		description: project!.description,
		project,
	};
};
