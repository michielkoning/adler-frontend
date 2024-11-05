import { z } from "zod";

export const ArrangementsSchema = z.array(
  z.object({
    id: z.number(),
    slug: z.string(),
    title: z.object({
      rendered: z.string(),
    }),
    excerpt: z.object({
      rendered: z.string(),
    }),
    acf: z.object({
      price_from: z.string().transform((val) => Number(val)),
    }),
  })
);
