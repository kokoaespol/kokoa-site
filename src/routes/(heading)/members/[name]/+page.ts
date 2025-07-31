import type { PageLoad } from "./$types";
import members from "$lib/data/members.json";
import { error } from "@sveltejs/kit";
import projects from "$lib/data/projects.json";

export const load = (async ({ params }) => {
	const member = members.find((member) => member.slug === params.name);

	if (!member) {
		error(404, `Miembro no encontrado`);
	}

	const member_projects = projects.filter((project) => {
		return project.authors.some((m) => m.slug === member.slug);
	});

	return {
		title: member.name,
		description: `Perfil de ${member.name} - ${member.role}`,
		member,
		member_projects,
	};
}) satisfies PageLoad;
