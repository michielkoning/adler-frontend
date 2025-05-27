import { z } from "zod";
import { PostSchema } from "../schemas/PostSchema";
import { getUrl } from "../utils/getUrl";
import { getFeaturedImage } from "../utils/getFeaturedImage";

const querySchema = z.object({
  slug: z.string(),
});

export default defineEventHandler(async (event) => {
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
    fields: ["title", "slug", "content", "date"],
    slug: query.data.slug,
  });

  const response = await $fetch(url);

  const parsed = parseData(response, PostSchema);

  if (!parsed.length) {
    throw createError({
      statusMessage: "Post not found",
    });
  }

  const item = parsed[0];

  const relatedPosts = await $fetch("/api/posts", {
    params: {
      exclude: item.id,
    },
  });

  return {
    id: item.id,
    slug: item.slug,
    content: {
      title: item.title.rendered,
      text: item.content.rendered,
      date: item.date,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
    },
    relatedPosts,
  };
});
