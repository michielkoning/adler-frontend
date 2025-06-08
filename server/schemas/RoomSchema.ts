import { z } from "zod";
import { FeaturedImageSchema } from "./FeaturedImageSchema";
import { TermsListSchema } from "./TermsSchema";
import { GallerySchema } from "./GallerySchema";

export const RoomSchema = z.object({
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
    gallery: GallerySchema,
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
    book_url: z.string(),
  }),
});

export const RoomListSchema = z.array(RoomSchema);
