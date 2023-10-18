export const siteConfig = {
  name: "kokoa",
  url: "https://kokoa.pages.dev/",
  ogImage: "https://kokoa.pages.dev/og.png",
  description:
    "Vive el software libre. Club estudiantil politécnico promotor del uso, modificación, distribución y aprendizaje de software libre.",
  links: {
    twitter: "https://twitter.com/kokoa_espol",
    github: "https://github.com/kokoaespol",
    instagram: "https://instagram.com/kokoa_espol",
    youtube: "https://youtube.com/kokoa_espol",
  },
  keywords: `kokoa,espol,open source,devs`,
  mainNav: [
    {
      title: "inicio",
      href: "/",
    },
    {
      title: "blog",
      href: "/blog",
    },
    {
      title: "proyectos",
      href: "#proyectos",
    },
    {
      title: "miembros",
      href: "#miembros",
    },
    {
      title: "eventos",
      href: "#eventos",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
