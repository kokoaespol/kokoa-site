import { addMessages, format, init, unwrapFunctionStore } from "svelte-i18n";
import en from "./en.json";
import es from "./es.json";

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

/** El idioma por defecto se sirve en la raíz del sitio; los demás van prefijados. */
export const DEFAULT_LOCALE: Locale = "es";

/**
 * Prefijo de ruta de cada idioma. Asume que el sitio se sirve en la raíz del
 * dominio (`kit.paths.base` vacío); si algún día deja de ser así, el prefijo
 * tiene que ir después del base.
 */
const PREFIX: Record<Locale, string> = { es: "", en: "/en" };

addMessages("es", es);
addMessages("en", en);

init({ fallbackLocale: DEFAULT_LOCALE, initialLocale: DEFAULT_LOCALE });

const formatter = unwrapFunctionStore(format);

type TranslateOptions = {
	/** Valores a interpolar en el mensaje, p. ej. `{ name: "Kokoa" }`. */
	values?: Record<string, string | number>;
	/** Texto a usar si la clave no existe en el diccionario. */
	default?: string;
};

/**
 * Traduce una clave con el idioma pasado **explícitamente**.
 *
 * El idioma nunca se toma del store `$locale` de svelte-i18n: ese store es
 * global al módulo y en SSR lo comparten las peticiones concurrentes, así que
 * depender de él permitiría servir una página en el idioma de otra petición.
 * Todo el código de la app debe usar esta función (o `use_i18n`), no `$_`.
 */
export function t(locale: Locale, id: string, options: TranslateOptions = {}): string {
	return formatter({ id, locale, values: options.values, default: options.default });
}

export function is_locale(value: string): value is Locale {
	return (LOCALES as readonly string[]).includes(value);
}

/**
 * Separa el prefijo de idioma de un pathname entrante.
 * `/en/events/1` → `{ locale: "en", path: "/events/1" }`
 */
export function parse_locale(pathname: string): { locale: Locale; path: string } {
	const [, first, ...rest] = pathname.split("/");

	if (first !== undefined && first !== DEFAULT_LOCALE && is_locale(first)) {
		return { locale: first, path: `/${rest.join("/")}` };
	}

	return { locale: DEFAULT_LOCALE, path: pathname };
}

/**
 * Añade el prefijo de idioma a una ruta interna sin prefijo.
 * Para enlaces desde componentes usa `use_i18n().href`, que ya es tipado.
 */
export function localize_path(path: string, locale: Locale): string {
	const prefix = PREFIX[locale];
	if (!prefix) return path;
	return path === "/" ? prefix : `${prefix}${path}`;
}
