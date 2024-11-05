import { z } from "zod";
import { ArrangementSchema } from "../schemas/ArrangementSchema";

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
    slug: query.data.slug,
    type: "arrangement",
    fields: ["slug", "title", "content", "acf"],
  });

  const response = await $fetch(url);
  // return response;

  const parsed = ArrangementSchema.safeParse(response);

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

  const item = parsed.data[0];

  return {
    id: item.id,
    slug: item.slug,
    prices: item.acf.prices,
    content: {
      title: item.title.rendered,
      text: item.content.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
    },
  };
});
