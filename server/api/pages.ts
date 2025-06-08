import { z } from "zod";
import { RelatedPageSchema } from "../schemas/RelatedPageSchema";
import type { Archive } from "~/types/Archive";
import { getUrl } from "../utils/getUrl";
import { getFeaturedImage } from "../utils/getFeaturedImage";
import { LocaleSchema } from "../schemas/LocaleSchema";

const querySchema = z.object({
  parentId: z.string().transform((val) => Number(val)),
  exclude: z
    .string()
    .optional()
    .transform((val) => Number(val)),
  locale: LocaleSchema,
});

export default defineEventHandler(async (event): Promise<Archive[]> => {
  const query = await getValidatedQuery(event, (body) =>
    querySchema.safeParse(body),
  );

  if (!query.success) {
    throw createError({
      statusMessage: "Invalid arguments",
      data: query.error.format(),
    });
  }
  const url = getUrl({
    image: true,
    lang: query.data.locale,
    parent: query.data.parentId,
    exclude: query.data.exclude,
    type: "pages",
    fields: ["title", "slug", "excerpt", "acf", "link"],
    orderby: "menu_order",
    order: "asc",
  });

  const response = await $fetch(url);

  const parsed = parseData(response, RelatedPageSchema);

  return parsed.map((item) => {
    return {
      id: item.id,
      title: item.title.rendered,
      link: item.link,
      text: item.excerpt.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
    };
  });
});
