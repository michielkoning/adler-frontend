import type { Archive } from "~/types/Archive";
import { RoomsSchema } from "../schemas/RoomsSchema";
import { getUrl } from "../utils/getUrl";
import { getFeaturedImage } from "../utils/getFeaturedImage";
import { z } from "zod";
import { LocaleSchema } from "../schemas/LocaleSchema";

const querySchema = z.object({
  locale: LocaleSchema,
  exclude: z
    .string()
    .optional()
    .transform((val) => Number(val)),
});

export default defineEventHandler(async (event): Promise<Archive[]> => {
  const query = await getValidatedQuery(event, (body) =>
    querySchema.safeParse(body)
  );

  if (!query.success) {
    throw createError({
      statusMessage: "Invalid arguments",
      data: query.error.format(),
    });
  }
  const url = getUrl({
    image: true,
    type: "room",
    fields: ["title", "slug", "excerpt", "acf"],
    exclude: query.data.exclude,
    locale: query.data.locale,
    orderby: "menu_order",
    order: "asc",
  });

  const response = await $fetch(url);

  const parsed = RoomsSchema.safeParse(response);

  if (!parsed.success) {
    throw createError({
      statusMessage: parsed.error.issues
        .map((i) => `${i.path}: ${i.message}`)
        .join(","),
    });
  }

  if (!parsed.data.length) {
    throw createError({
      statusMessage: "Page not found",
    });
  }

  return parsed.data.map((item) => {
    return {
      id: item.id,
      title: item.title.rendered,
      link: item.slug,
      text: item.excerpt.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
      price: item.acf.price_from,
    };
  });
});
