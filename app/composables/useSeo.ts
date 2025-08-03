import type { Seo } from "~/types/Seo";

export const useSeo = (seo?: Seo) => {
  if (!seo) {
    return;
  }
  useSeoMeta({
    title: () => seo.title,
    ogTitle: () => seo.ogTitle,
    description: () => seo.description,
    ogDescription: () => seo.ogDescription,
    ogType: () => "article",
    ogImage: () => seo.ogImage,
    twitterTitle: () => seo.title,
    twitterDescription: () => seo.description,
    twitterImage: () => seo.twitterImage,
    articleModifiedTime: () => seo.articleModifiedTime,
  });

  useSchemaOrg([
    defineWebPage({
      name: seo.title,
      description: seo.description,
    }),
  ]);
};
