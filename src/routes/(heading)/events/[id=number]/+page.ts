import type { PageLoad } from "./$types";
import events from "$lib/data/events.json";
import { error } from "@sveltejs/kit";
import { parse_locale, t } from "$lib/i18n";
import { localized } from "$lib/i18n/content.js";

export const load = (({ params, url }) => {
	const { locale } = parse_locale(url.pathname);
	const id = Number.parseInt(params.id, 10);
	const event = events.find((event) => event.id === id);

	if (!event) {
		error(404, t(locale, "events.not_found"));
	}

	const description = localized(event.description, locale);

	return {
		title: event.name,
		description,
		event: { ...event, description },
	};
}) satisfies PageLoad;
