import { z } from "zod";
import { ArrangementSchema } from "../schemas/ArrangementSchema";
import { Arrangement } from "~/types/Arangement";
import { getUrl } from "../utils/getUrl";
import { getFeaturedImage } from "../utils/getFeaturedImage";
import { LocaleSchema } from "../schemas/LocaleSchema";

const querySchema = z.object({
  locale: LocaleSchema,
  slug: z.string(),
});

export default defineEventHandler(async (event): Promise<Arrangement> => {
  const query = await getValidatedQuery(event, (body) =>
    querySchema.safeParse(body)
  );

  if (!query.success) {
    throw createError({
      statusMessage: "Invalid arguments",
      data: query.error.format(),
    });
  }
  const url = getUrl({
    image: true,
    slug: query.data.slug,
    type: "arrangement",
    fields: ["slug", "title", "content", "acf"],
  });

  const response = await $fetch(url);

  const parsed = ArrangementSchema.safeParse(response);

  if (!parsed.success) {
    throw createError({
      data: parsed.error.format(),
    });
  }

  if (!parsed.data.length) {
    throw createError({
      statusMessage: "Page not found",
    });
  }

  const item = parsed.data[0];

  const relatedArrangements = await $fetch("/api/arrangements", {
    params: {
      exclude: item.id,
      locale: query.data.locale,
    },
  });

  return {
    id: item.id,
    slug: item.slug,
    prices: item.acf.prices,
    content: {
      title: item.title.rendered,
      text: item.content.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
    },
    relatedArrangements,
  };
});
