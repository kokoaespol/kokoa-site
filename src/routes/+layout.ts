import { parse_locale } from "$lib/i18n";
import { locale as i18n_locale } from "svelte-i18n";
import type { LayoutLoad } from "./$types";

export const load = (({ url }) => {
	const { locale } = parse_locale(url.pathname);

	// El render pasa el idioma explícito en cada traducción (ver $lib/i18n), pero
	// se sincroniza el store global para que un `$_` suelto tampoco desentone.
	i18n_locale.set(locale);

	return { locale };
}) satisfies LayoutLoad;
