import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

// https://github.com/sveltejs/kit/issues/4940

export const load: PageLoad = () => {
  throw error(404, "Not found");
};
