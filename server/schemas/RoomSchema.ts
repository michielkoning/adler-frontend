import { z } from "zod";
import { FeaturedImageSchema } from "./FeaturedImageSchema";
import { TermsListSchema } from "./TermsSchema";

export const RoomSchema = z.array(
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
      "wp:term": TermsListSchema,
    }),
    acf: z.object({
      price_from: z.string().transform((val) => Number(val)),
    }),
  })
);
