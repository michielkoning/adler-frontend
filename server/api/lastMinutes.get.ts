import { z } from "zod";
import { getFeaturedImage } from "../utils/getFeaturedImage";
import { getUrl } from "../utils/getUrl";
import { LocaleSchema } from "../schemas/LocaleSchema";
import { LastMinutesSchema } from "../schemas/LastMinutesSchema";

import type { LastMinute } from "~/types/LastMinute";

const querySchema = z.object({
  locale: LocaleSchema,
});

export default defineEventHandler(async (event): Promise<LastMinute[]> => {
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

  const getRoom = async (id: number) => {
    return await $fetch("/api/roomById", {
      params: {
        id,
      },
    });
  };

  const items = await parsed.map(async (item) => {
    return {
      id: item.id,
      link: item.slug,
      title: item.title.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
      room: await getRoom(item.acf.room.ID),
      prices: item.acf.prices,
      isSold: item.acf.sold,
      dates: {
        from: item.acf.dates.date_from,
        until: item.acf.dates.date_untill,
      },
    };
  });

  return await Promise.all(items);
});
