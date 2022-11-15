export type ImageFile = {
  id: string;
  width_px: number;
  height_px: number;
  file_path: string;
  size_bytes: number;
  mime: string;
};

export type Image = {
  id: string;
  title: string;
  alt_text: string;
  caption?: string;
  small_file: ImageFile;
  medium_file: ImageFile;
  large_file: ImageFile;
};

export type Member = {
  id: string;
  username: string;
  full_name?: string;
  profile_pic?: Image;
};

export type Tag = {
  id: number;
  title: string;
  slug: string;
};

export type Post = {
  id: string;
  title: string;
  short_title: string;
  slug: string;
  description: string;
  content: string;
  Member: Member;
  cover_image: Image;
  og_image: Image;
  published_at: string;
  updated_at: string;
  tags: Tag[];
};

export type Project = {
  id: string;
  title: string;
  short_description: string;
  slug: string;
  description: string;
  project_image: Image;
  og_image: Image;
  tags: Tag[];
  published_at: string;
  updated_at: string;
  skills: string[];

  team_lead: Member[];
  contributors: Member[];
};
