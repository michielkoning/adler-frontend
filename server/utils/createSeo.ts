import type z from "zod";
import type { SeoSchema } from "../schemas/SeoSchema";
import type { Seo } from "~/types/Seo";

export const createSeo = (seo: z.infer<typeof SeoSchema>): Seo => {
  return {
    title: seo.title,
    description: seo.description,
    ogImage: seo.og_image,
    ogTitle: seo.og_title,
    twitterImage: seo.og_image,
    ogDescription: seo.og_description ?? seo.description,
    articleModifiedTime: seo.article_modified_time,
  };
};
