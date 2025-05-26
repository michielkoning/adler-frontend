import { z } from "zod";
import { FeaturedImageSchema } from "./FeaturedImageSchema";

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
  acf: z.object({
    gallery: z
      .array(
        z.object({
          ID: z.number(),
          url: z.string(),
          alt: z.string(),
          width: z.number(),
          height: z.number(),
        }),
      )
      .or(z.boolean())
      .transform((val) => {
        if (val === false) {
          return undefined;
        }
        return val;
      }),
  }),
});

export const PageListSchema = z.array(PageSchema);
