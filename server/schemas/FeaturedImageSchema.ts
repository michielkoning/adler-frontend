import { z } from "zod";

export const FeaturedImageSchema = z.object({
  id: z.number(),
  type: z.string(),
  alt_text: z.string().default(""),
  media_type: z.string(),
  media_details: z.object({
    width: z.number(),
    height: z.number(),
    file: z.string(),
  }),
});
