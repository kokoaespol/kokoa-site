import type { PageLoad } from "./$types";

export const load = (async () => {
	return {
		title: "Nosotros",
		description: "Datos del club Kokoa",
	};
}) satisfies PageLoad;
