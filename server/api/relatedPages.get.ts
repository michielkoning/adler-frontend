import { z } from "zod";
import getFeaturedImage from "../utils/getFeaturedImage";
import { RelatedPageSchema } from "../schemas/RelatedPageSchema";
import { Archive } from "~/types/Archive";

const querySchema = z.object({
  parentId: z.string().transform((val) => Number(val)),
});

export default defineEventHandler(async (event): Promise<Archive[]> => {
  const query = await getValidatedQuery(event, (body) =>
    querySchema.safeParse(body)
  );

  if (!query.success) {
    throw query.error.issues;
  }

  const url = getUrl({
    image: true,
    parent: query.data.parentId,
    type: "pages",
    fields: ["link", "title", "parent", "acf", "excerpt"],
  });

  const response = await $fetch(url);

  const parsed = RelatedPageSchema.safeParse(response);

  if (!parsed.success) {
    throw createError({
      message: parsed.error.issues.map((i) => i.path).join(","),
    });
  }

  if (!parsed.data.length) {
    throw createError({
      message: "Page not found",
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
