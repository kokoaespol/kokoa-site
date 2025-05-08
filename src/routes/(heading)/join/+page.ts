import type { PageLoad } from "./$types";

export const load = (async () => {
	return {
		title: "Unirse",
		description: "Unete al club Kokoa",
	};
}) satisfies PageLoad;
