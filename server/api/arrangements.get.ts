import { ArrangementsSchema } from "../schemas/ArrangementsSchema";

export default defineEventHandler(async (event) => {
  const url = getUrl({
    image: true,
    lang: "nl",
    // slug: query.data.slug,
    type: "arrangement",
    fields: ["slug", "title", "acf", "excerpt"],
    pageSize: 3,
  });

  const response = await $fetch(url);

  const parsed = ArrangementsSchema.safeParse(response);

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

  return parsed.data.map((item) => {
    return {
      id: item.id,
      slug: item.slug,
      title: item.title.rendered,
      excerpt: item.excerpt.rendered,
      priceFrom: item.acf.price_from,
    };
  });
});
