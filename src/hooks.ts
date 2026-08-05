import { parse_locale } from "$lib/i18n";
import type { Reroute } from "@sveltejs/kit";

/**
 * Quita el prefijo de idioma antes de resolver la ruta, para que `/en/events`
 * renderice `src/routes/(heading)/events` sin duplicar el árbol de rutas.
 */
export const reroute: Reroute = ({ url }) => parse_locale(url.pathname).path;
