import type { Post } from "$lib/types";
import type { PageLoad } from "./$types";

const get_posts = async () => {
  const posts: Post[] = [];

  return posts;
};

export const load: PageLoad = async () => {
  const posts = await get_posts();
  return { posts };
};
