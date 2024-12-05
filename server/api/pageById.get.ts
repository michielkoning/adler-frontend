import { z } from "zod";
import { PageSchema } from "../schemas/PageSchema";
import { Page } from "~/types/Page";
import { getUrl } from "../utils/getUrl";
import { getFeaturedImage } from "../utils/getFeaturedImage";

const querySchema = z.object({
  slug: z.string().optional(),
  id: z.string().optional(),
});

export default defineEventHandler(async (event): Promise<Page> => {
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
    slug: query.data.slug,
    id: query.data.id,
    type: "pages",
    fields: ["slug", "title", "content", "parent", "acf", "excerpt"],
  });

  const response = await $fetch(url);

  const parsed = PageSchema.safeParse(response);

  if (!parsed.success) {
    throw createError({
      statusMessage: parsed.error.issues.map((i) => i.path).join(","),
    });
  }

  if (!parsed.data) {
    throw createError({
      statusMessage: "Page not found",
    });
  }

  const item = parsed.data;

  return {
    id: item.id,
    slug: item.slug,
    content: {
      title: item.title.rendered,
      text: item.content.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
    },
  };
});
