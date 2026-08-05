// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import type { Locale } from "$lib/i18n";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			locale: Locale;
		}
		interface PageData {
			/** Idioma de la petición, derivado del prefijo de la URL. */
			locale: Locale;
			/** Clave i18n del título, para las páginas de texto fijo. */
			title_key?: string;
			/** Título ya resuelto, para las páginas cuyo título es un dato. */
			title?: string;
			/** Clave i18n de la meta description. */
			description_key?: string;
			/** Meta description ya resuelta. */
			description?: string;
		}
		// interface PageState {}
		interface Platform {
			env: Env;
			cf: CfProperties;
			ctx: ExecutionContext;
		}
	}
}

export {};
