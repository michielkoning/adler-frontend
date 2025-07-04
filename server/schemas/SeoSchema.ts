import { z } from "zod";

export const SeoSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  og_title: z.string(),
  og_description: z.string(),
  article_modified_time: z.string(),
  og_image: z.array(
    z.object({
      width: z.number(),
      height: z.number(),
      url: z.string(),
      type: z.string(),
    }),
  ),
});
