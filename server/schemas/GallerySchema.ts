import { z } from "zod";

export const GallerySchema = z
  .array(
    z.object({
      ID: z.number(),
      url: z.string(),
      alt: z.string(),
      width: z.number(),
      height: z.number(),
    }),
  )
  .or(z.boolean())
  .transform((val) => {
    if (val === false) {
      return undefined;
    }
    return val;
  });
