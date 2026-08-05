import { page } from "$app/state";
import type { Pathname, ResolvedPathname } from "$app/types";
import { localize_path, parse_locale, t, type Locale } from "./index.js";

type TranslateOptions = {
	values?: Record<string, string | number>;
	default?: string;
};

/**
 * Traductor y generador de enlaces ligados al idioma de la petición actual
 * (`page.data.locale`, que pone el load de `+layout.ts`).
 *
 * Se llama en la inicialización del componente; `t` y `href` leen `page.data`
 * en cada invocación, así que siguen siendo reactivos al cambiar de ruta.
 * `locale` es un getter: al desestructurarlo se congela el valor inicial.
 */
export function use_i18n(): {
	readonly locale: Locale;
	t: (id: string, options?: TranslateOptions) => string;
	href: (path: Pathname) => ResolvedPathname;
	href_in: (locale: Locale) => ResolvedPathname;
} {
	// `href` sustituye a `resolve()` para los enlaces internos: el prefijo de
	// idioma ocupa el mismo lugar que `paths.base`, así que el resultado sigue
	// siendo un pathname ya resuelto.
	const href = (path: Pathname) => localize_path(path, page.data.locale) as ResolvedPathname;

	return {
		get locale() {
			return page.data.locale;
		},
		t: (id, options) => t(page.data.locale, id, options),
		href,
		/** La ruta actual en otro idioma, para el selector de idioma. */
		href_in: (locale) =>
			localize_path(parse_locale(page.url.pathname).path, locale) as ResolvedPathname,
	};
}
