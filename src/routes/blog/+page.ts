import type { Post } from "$lib/types";
import type { PageLoad } from "./$types";

const get_posts = async () => {
  const posts: Post[] = [
    {
      id: "1",
      title: "Post 1 Title",
      short_title: "Post 1",
      slug: "post-1",
      description: "Post 1 Description",
      content: "lorem ipsum dolor sit amet",
      author: {
        id: "1",
        username: "user1",
      },
      cover_image: {
        id: "1",
        title: "Post 1",
        alt_text: "Post 1",
        small_file: {
          id: "1",
          width_px: 1,
          height_px: 1,
          file_path: "1",
          size_bytes: 1,
          mime: "1",
        },
        medium_file: {
          id: "1",
          width_px: 1,
          height_px: 1,
          file_path: "1",
          size_bytes: 1,
          mime: "1",
        },
        large_file: {
          id: "1",
          width_px: 1,
          height_px: 1,
          file_path: "1",
          size_bytes: 1,
          mime: "1",
        },
      },
      og_image: {
        id: "1",
        title: "Post 1",
        alt_text: "Post 1",
        small_file: {
          id: "1",
          width_px: 1,
          height_px: 1,
          file_path: "1",
          size_bytes: 1,
          mime: "1",
        },
        medium_file: {
          id: "1",
          width_px: 1,
          height_px: 1,
          file_path: "1",
          size_bytes: 1,
          mime: "1",
        },
        large_file: {
          id: "1",
          width_px: 1,
          height_px: 1,
          file_path: "1",
          size_bytes: 1,
          mime: "1",
        },
      },
      published_at: "2021-01-01",
      updated_at: "2021-01-01",
      tags: [
        {
          id: 1,
          title: "Tag 1",
          slug: "tag-1",
        },
      ],
    },
  ];

  return posts;
};

export const load: PageLoad = async () => {
  const posts = await get_posts();
  return { posts };
};
