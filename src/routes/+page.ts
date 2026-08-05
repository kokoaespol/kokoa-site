import type { PageLoad } from "./$types";
import events from "$lib/data/events.json";
import members from "$lib/data/members.json";
import { parse_locale } from "$lib/i18n";
import { localized } from "$lib/i18n/content.js";

export const load = (({ url }) => {
	const { locale } = parse_locale(url.pathname);

	return {
		title_key: "page.home.title",
		description_key: "page.home.description",
		events: events.map((event) => ({
			...event,
			description: localized(event.description, locale),
		})),
		members,
	};
}) satisfies PageLoad;
