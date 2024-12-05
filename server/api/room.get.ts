import { z } from "zod";
import { RoomSchema } from "../schemas/RoomSchema";
import { getTagsByType } from "../utils/getTagsByType";
import { getUrl } from "../utils/getUrl";
import { getFeaturedImage } from "../utils/getFeaturedImage";

const querySchema = z.object({
  slug: z.string(),
  locale: z.string(),
});

export default defineEventHandler(async (event) => {
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
    type: "room",
    fields: ["title", "slug", "content", "acf"],
    slug: query.data.slug,
  });

  const response = await $fetch(url);

  const parsed = RoomSchema.safeParse(response);

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

  const relatedRooms = await $fetch("/api/rooms", {
    params: {
      exclude: item.id,
      locale: query.data.locale,
    },
  });

  return {
    id: item.id,
    slug: item.slug,
    prices: {
      fullBoardHighSeason: item.acf.full_board_high_season,
      halfBoardHighSeason: item.acf.half_board_high_season,
      fullBoardLowSeason: item.acf.full_board_low_season,
      halfBoardLowSeason: item.acf.half_board_low_season,
    },
    bookUrl: item.acf.book_url,
    content: {
      title: item.title.rendered,
      text: item.content.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
    },
    services: getTagsByType(item._embedded["wp:term"]),
    relatedRooms,
  };
});
