import type { PageLoad } from "./$types";

export const load = (async () => {
	return {
		title: "Registrarse",
		description: "Registrarse en el club Kokoa",
	};
}) satisfies PageLoad;
