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
      room: z.object({
        ID: z.number(),
      }),
      dates: z.object({
        date_from: z.string().transform((val) => {
          const date = val.split("/");
          if (date.length === 3) {
            return new Date(
              Number(date[2]),
              Number(date[1]) - 1,
              Number(date[0]),
            );
          }
          return undefined;
        }),
        date_untill: z.string().transform((val) => {
          const date = val.split("/");
          if (date.length === 3) {
            return new Date(
              Number(date[2]),
              Number(date[1]) - 1,
              Number(date[0]),
            );
          }
          return undefined;
        }),
      }),
      prices: z.array(
        z.object({
          kids: z.coerce.number(),
          adults: z.coerce.number(),
          price: z.string(),
        }),
      ),
      sold: z.boolean(),
    }),
  }),
);
