import { z } from "zod";
import { PageSchema } from "../schemas/PageSchema";

const querySchema = z.object({
  slug: z.string(),
});

export default defineEventHandler(async (event) => {


  const query = await getValidatedQuery(event, (body) =>
    querySchema.safeParse(body),
  );

  if (!query.success) {
    throw query.error.issues;
  }

  const url = getUrl({
    image: true,
    slug: query.data.slug,
    type: "pages",
    fields: ["slug", "title", "content", "yoast_head_json", "parent", "acf", "excerpt"],
  });

  const response = await $fetch(url)

  const parsed = PageSchema.safeParse(response);

  if (!parsed.success) {
    throw createError({
      message: parsed.error.issues.map((i) => i.path).join(","),
    });
  }


  if (!parsed.data.length) {
    throw createError({
      message: 'Page not found'
    });
  }

  const item = parsed.data[0]

  return {
    id: item.id,
    slug: item.slug,
    title: item.title.rendered,
    content: item.content.rendered,

  }
});
