import type { PageLoad } from "./$types";

export const load = (async () => {
	return {
		title: "Contacto",
		description: "Datos de contacto del club Kokoa",
	};
}) satisfies PageLoad;
