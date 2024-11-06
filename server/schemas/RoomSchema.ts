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
      full_board_high_season: z
        .string()
        .optional()
        .transform((val) => Number(val)),
      half_board_high_season: z
        .string()
        .optional()
        .transform((val) => Number(val)),
      full_board_low_season: z
        .string()
        .optional()
        .transform((val) => Number(val)),
      half_board_low_season: z
        .string()
        .optional()
        .transform((val) => Number(val)),
    }),
  })
);
