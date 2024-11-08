import { z } from "zod";

export const MenuSchema = z.object({
  id: z.number(),
  link: z
    .string()
    .transform((val) => val.replace("https://www.adler-lingenau.com", "")),
  title: z.object({
    rendered: z.string(),
  }),
  parent: z.number().optional(),
});

export const MenuListSchema = z.array(MenuSchema);
