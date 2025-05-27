import type { Archive } from "~/types/Archive";
import { PostsSchema } from "../schemas/PostsSchema";
import { getUrl } from "../utils/getUrl";
import { getFeaturedImage } from "../utils/getFeaturedImage";
import { z } from "zod";
import { LocaleSchema } from "../schemas/LocaleSchema";
import { parseData } from "~/utils/parseData";

const querySchema = z.object({
  locale: LocaleSchema,
  exclude: z
    .string()
    .optional()
    .transform((val) => Number(val)),
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
    type: "posts",
    fields: ["title", "slug", "excerpt", "date"],
    exclude: query.data.exclude,
  });

  const response = await $fetch(url);

  const parsed = parseData(response, PostsSchema);

  return parsed.map((item) => {
    return {
      id: item.id,
      title: item.title.rendered,
      link: item.slug,
      date: item.date,
      text: item.excerpt.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
    };
  });
});
