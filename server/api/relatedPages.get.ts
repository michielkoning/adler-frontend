import { z } from "zod";
import { RelatedPageSchema } from "../schemas/RelatedPageSchema";
import type { Archive } from "~/types/Archive";
import { getUrl } from "../utils/getUrl";
import { getFeaturedImage } from "../utils/getFeaturedImage";
import { parseData } from "~/utils/parseData";

const querySchema = z.object({
  parentId: z.string().transform((val) => Number(val)),
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
    parent: query.data.parentId,
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
