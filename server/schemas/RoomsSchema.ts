import { z } from "zod";
import { FeaturedImageSchema } from "./FeaturedImageSchema";

export const RoomsSchema = z.array(
  z.object({
    id: z.number(),
    slug: z.string(),
    title: z.object({
      rendered: z.string(),
    }),
    excerpt: z.object({
      rendered: z.string(),
    }),
    _embedded: z.object({
      "wp:featuredmedia": z.array(FeaturedImageSchema).default([]),
    }),
    acf: z.object({
      price_from: z.string().transform((val) => Number(val)),
    }),
  }),
);
