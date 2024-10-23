import { z } from "zod";

export const PageSchema = z.array(
  z.object({
    id: z.number(),
    slug: z.string(),
    title: z.object({
      rendered: z.string(),
    }),
    content: z.object({
      rendered: z.string(),
    }),

  }),
);
