import { DEFAULT_LOCALE, type Locale } from "./index.js";

/**
 * Un campo de texto de los JSON de contenido: o ya está traducido por idioma,
 * o sigue siendo un string plano porque aún no se ha traducido.
 */
export type LocalizedField = string | Partial<Record<Locale, string>>;

/**
 * Resuelve un campo de contenido al idioma pedido, cayendo al idioma por
 * defecto. Así un `en` que falta muestra el texto en español en vez de vacío,
 * y los JSON se pueden traducir de a poco.
 */
export function localized(field: LocalizedField, locale: Locale): string {
	if (typeof field === "string") return field;
	return field[locale] ?? field[DEFAULT_LOCALE] ?? "";
}
