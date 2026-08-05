import type { PageLoad } from "./$types";
import projects from "$lib/data/projects.json";
import { parse_locale } from "$lib/i18n";
import { localized } from "$lib/i18n/content.js";

export const load = (({ url }) => {
	const { locale } = parse_locale(url.pathname);

	return {
		title_key: "page.projects.title",
		description_key: "page.projects.description",
		projects: projects.map((project) => ({
			...project,
			description: localized(project.description, locale),
		})),
	};
}) satisfies PageLoad;
