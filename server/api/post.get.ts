import { z } from "zod";
import { PostSchema } from "../schemas/PostSchema";
import { getUrl } from "../utils/getUrl";
import { getFeaturedImage } from "../utils/getFeaturedImage";

const querySchema = z.object({
  slug: z.string(),
});

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, (body) =>
    querySchema.safeParse(body)
  );

  if (!query.success) {
    throw query.error.issues;
  }

  const url = getUrl({
    image: true,
    type: "posts",
    fields: ["title", "slug", "content", "date"],
    slug: query.data.slug,
  });

  const response = await $fetch(url);

  const parsed = PostSchema.safeParse(response);

  if (!parsed.success) {
    throw createError({
      statusMessage: parsed.error.issues.map((i) => i.path).join(","),
    });
  }

  if (!parsed.data.length) {
    throw createError({
      statusMessage: "Post not found",
    });
  }

  const item = parsed.data[0];

  return {
    id: item.id,
    slug: item.slug,
    content: {
      title: item.title.rendered,
      text: item.content.rendered,
      date: item.date,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
    },
  };
});
