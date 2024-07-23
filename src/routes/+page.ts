import type { PageLoad } from "./$types";

export const load = (async () => {
	return {
		title: "Inicio",
		description:
			"Kokoa es un club estudiantil de ESPOL, en el que entusiastas del código libre se reunen a promover ideologías comunistas.",
	};
}) satisfies PageLoad;
