import { z } from "zod";
import { FeaturedImageSchema } from "./FeaturedImageSchema";

export const LastMinutesSchema = z.array(
  z.object({
    id: z.number(),
    slug: z.string(),
    title: z.object({
      rendered: z.string(),
    }),
    _embedded: z.object({
      "wp:featuredmedia": z.array(FeaturedImageSchema).default([]),
    }),
    acf: z.object({
      dates: z.object({
        date_from: z.string(),
        date_untill: z.string(),
      }),
      prices: z.array(
        z.object({
          kids: z.string(),
          adults: z.string(),
          price: z.string(),
        }),
      ),
      sold: z.boolean(),
    }),
  }),
);
