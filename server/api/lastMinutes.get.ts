import { z } from "zod";
import { getFeaturedImage } from "../utils/getFeaturedImage";
import { getUrl } from "../utils/getUrl";
import { LocaleSchema } from "../schemas/LocaleSchema";
import { LastMinutesSchema } from "../schemas/LastMinutesSchema";
import { parseData } from "~/utils/parseData";

const querySchema = z.object({
  locale: LocaleSchema,
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
    lang: query.data.locale,
    type: "last_minute",
    fields: ["slug", "title", "acf"],
    locale: query.data.locale,
    orderby: "menu_order",
    order: "asc",
  });

  const response = await $fetch(url);

  const parsed = parseData(response, LastMinutesSchema);

  return parsed.map((item) => {
    return {
      id: item.id,
      link: item.slug,
      title: item.title.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
      room: item.acf.room.ID,
      prices: item.acf.prices,
      dates: item.acf.dates,
    };
  });
});
