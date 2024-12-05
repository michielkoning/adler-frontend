import { z } from "zod";
import { RelatedPageSchema } from "../schemas/RelatedPageSchema";
import { Archive } from "~/types/Archive";
import { getUrl } from "../utils/getUrl";
import { getFeaturedImage } from "../utils/getFeaturedImage";

const querySchema = z.object({
  parentId: z.string().transform((val) => Number(val)),
});

export default defineEventHandler(async (event): Promise<Archive[]> => {
  const query = await getValidatedQuery(event, (body) =>
    querySchema.safeParse(body)
  );

  if (!query.success) {
    throw createError({
      statusMessage: query.error.issues.map((i) => i.message).join(","),
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

  const parsed = RelatedPageSchema.safeParse(response);

  if (!parsed.success) {
    throw createError({
      statusMessage: parsed.error.issues.map((i) => i.path).join(","),
    });
  }

  return parsed.data.map((item) => {
    return {
      id: item.id,
      title: item.title.rendered,
      link: item.link,
      text: item.excerpt.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
    };
  });
});
