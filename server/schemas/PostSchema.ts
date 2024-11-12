import { z } from "zod";
import { FeaturedImageSchema } from "./FeaturedImageSchema";

export const PostSchema = z.array(
  z.object({
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
  })
);
