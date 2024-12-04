import { Archive } from "~/types/Archive";
import { PostsSchema } from "../schemas/PostsSchema";
import { getUrl } from "../utils/getUrl";
import { getFeaturedImage } from "../utils/getFeaturedImage";
import { z } from "zod";

const querySchema = z.object({
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
    throw query.error.issues;
  }

  const url = getUrl({
    image: true,
    type: "posts",
    fields: ["title", "slug", "excerpt", "date"],
    exclude: query.data.exclude,
  });

  const response = await $fetch(url);

  const parsed = PostsSchema.safeParse(response);

  if (!parsed.success) {
    throw createError({
      statusMessage: parsed.error.issues.map((i) => i.path).join(","),
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
      date: item.date,
      text: item.excerpt.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
    };
  });
});
