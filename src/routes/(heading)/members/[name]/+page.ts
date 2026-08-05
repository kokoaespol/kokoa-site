import type { PageLoad } from "./$types";
import members from "$lib/data/members.json";
import { error } from "@sveltejs/kit";
import projects from "$lib/data/projects.json";
import { parse_locale, t } from "$lib/i18n";
import { localized } from "$lib/i18n/content.js";

export const load = (({ params, url }) => {
	const { locale } = parse_locale(url.pathname);
	const member = members.find((member) => member.slug === params.name);

	if (!member) {
		error(404, t(locale, "members.not_found"));
	}

	const member_projects = projects
		.filter((project) => project.authors.some((m) => m.slug === member.slug))
		.map((project) => ({ ...project, description: localized(project.description, locale) }));

	const role = t(locale, `role.${member.role}`, { default: member.role });

	return {
		title: member.name,
		description: t(locale, "page.member.description", {
			values: { name: member.name, role },
		}),
		member: { ...member, description: localized(member.description, locale) },
		member_projects,
	};
}) satisfies PageLoad;
