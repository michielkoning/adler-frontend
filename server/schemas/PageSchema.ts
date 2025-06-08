import { z } from "zod";
import { FeaturedImageSchema } from "./FeaturedImageSchema";
import { GallerySchema } from "./GallerySchema";

export const PageSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
  }),
  _embedded: z.object({
    "wp:featuredmedia": z.array(FeaturedImageSchema).default([]),
  }),
  parent: z.number(),
  acf: z.object({
    gallery: GallerySchema,
  }),
});

export const PageListSchema = z.array(PageSchema);
