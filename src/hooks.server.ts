import { parse_locale } from "$lib/i18n";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const preload_font: Handle = async ({ event, resolve }) => {
	return await resolve(event, {
		preload: ({ type }) => type === "font",
	});
};

/** Rellena el `lang` del documento con el idioma que pide la URL. */
const set_document_language: Handle = async ({ event, resolve }) => {
	const { locale } = parse_locale(event.url.pathname);
	event.locals.locale = locale;

	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace("%lang%", locale),
	});
};

export const handle = sequence(preload_font, set_document_language);
