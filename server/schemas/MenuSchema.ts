import { z } from "zod";

const replaceSlugs = (value: string) => {
  return value
    .replace("https://www.adler-lingenau.com", "")
    .replace("/nl/rooms/", "/nl/kamers/")
    .replace("/de/rooms/", "/de/zimmer/")
    .replace("/nl/arrangements/", "/nl/arrangementen/");
};

export const MenuSchema = z.object({
  id: z.number(),
  link: z.string().transform((val) => replaceSlugs(val)),
  title: z.object({
    rendered: z.string(),
  }),
  parent: z.number().optional(),
});

export const MenuListSchema = z.array(MenuSchema);
