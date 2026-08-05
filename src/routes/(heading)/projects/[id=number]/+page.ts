import type { PageLoad } from "./$types";
import projects from "$lib/data/projects.json";
import { error } from "@sveltejs/kit";
import { parse_locale, t } from "$lib/i18n";
import { localized } from "$lib/i18n/content.js";

export const load = (({ params, url }) => {
	const { locale } = parse_locale(url.pathname);
	const id = Number.parseInt(params.id, 10);
	const project = projects.find((project) => project.id === id);

	if (!project) {
		error(404, t(locale, "projects.not_found"));
	}

	const description = localized(project.description, locale);

	return {
		title: project.name,
		description,
		project: {
			...project,
			description,
			purpose: localized(project.purpose, locale),
			how: localized(project.how, locale),
		},
	};
}) satisfies PageLoad;
