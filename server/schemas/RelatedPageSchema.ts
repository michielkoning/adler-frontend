import { z } from "zod";
import { FeaturedImageSchema } from "./FeaturedImageSchema";

export const RelatedPageSchema = z.array(
  z.object({
    id: z.number(),
    link: z
      .string()
      .transform((val) => val.replace("https://www.adler-lingenau.com", "")),
    title: z.object({
      rendered: z.string(),
    }),
    excerpt: z.object({
      rendered: z.string(),
    }),
    _embedded: z.object({
      "wp:featuredmedia": z.array(FeaturedImageSchema).default([]),
    }),
  })
);
