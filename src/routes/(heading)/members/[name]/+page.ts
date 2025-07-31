import type { PageLoad } from "./$types";
import members from "$lib/data/members.json";
import { error } from "@sveltejs/kit";
import projects from "$lib/data/projects.json";

export const load = (async ({ params }) => {
	const slug = compareName(params.name);
	const member = members.find((member) => compareName(member.name) === slug);

	const memberProjects = projects.filter((project) => {
		return project.authors.some((m) => compareName(m.name) === slug);
	});

	if (!member) {
		throw error(404, `Miembro no encontrado`);
	}

	return {
		title: member.name,
		description: `Perfil de ${member.name} - ${member.role}`,
		member,
		memberProjects,
	};
}) satisfies PageLoad;

function compareName(name: string): string {
	return name
		.toLowerCase()
		.replace(/\s+/g, "_")
		.replace(/-/g, "_")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");
}
