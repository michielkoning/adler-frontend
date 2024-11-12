import { z } from "zod";
import { PageListSchema } from "../schemas/PageSchema";
import { Page } from "~/types/Page";
import getFeaturedImage from "../utils/getFeaturedImage";

const querySchema = z.object({
  slug: z.string().optional(),
  id: z.string().optional(),
});

export default defineEventHandler(async (event): Promise<Page> => {
  const query = await getValidatedQuery(event, (body) =>
    querySchema.safeParse(body)
  );

  if (!query.success) {
    throw query.error.issues;
  }
  const url = getUrl({
    image: true,
    slug: query.data.slug,
    id: query.data.id,
    type: "pages",
    fields: ["slug", "title", "content", "parent", "acf", "excerpt"],
  });

  const response = await $fetch(url);

  const parsed = PageListSchema.safeParse(response);

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

  const item = parsed.data[0];

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
