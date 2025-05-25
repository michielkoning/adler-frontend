import type { Archive } from "~/types/Archive";
import { ArrangementsSchema } from "../schemas/ArrangementsSchema";
import { z } from "zod";
import { getFeaturedImage } from "../utils/getFeaturedImage";
import { getUrl } from "../utils/getUrl";
import { LocaleSchema } from "../schemas/LocaleSchema";

const querySchema = z.object({
  locale: LocaleSchema,
  pageSize: z
    .string()
    .optional()
    .transform((val) => Number(val)),
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
    lang: "nl",
    type: "arrangement",
    fields: ["slug", "title", "acf", "excerpt"],
    pageSize: query.data.pageSize,
    exclude: query.data.exclude,
    locale: query.data.locale,
    orderby: "menu_order",
    order: "asc",
  });

  const response = await $fetch(url);



  const parsed = ArrangementsSchema.safeParse(response);

  if (!parsed.success) {
    throw createError({
      data: parsed.error.format(),
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
      link: item.slug,
      title: item.title.rendered,
      text: item.excerpt.rendered,
      price: item.acf.price_from,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
    };
  });
});
