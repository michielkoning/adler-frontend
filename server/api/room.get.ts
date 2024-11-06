import getFeaturedImage from "../utils/getFeaturedImage";
import { z } from "zod";
import { RoomSchema } from "../schemas/RoomSchema";
import { getTagsByType } from "../utils/getTagsByType";

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
    type: "room",
    fields: ["title", "slug", "content", "acf"],
    slug: query.data.slug,
  });

  const response = await $fetch(url);

  const parsed = RoomSchema.safeParse(response);

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
    prices: {
      fullBoardHighSeason: item.acf.full_board_high_season,
      halfBoardHighSeason: item.acf.half_board_high_season,
      fullBoardLowSeason: item.acf.full_board_low_season,
      halfBoardLowSeason: item.acf.half_board_low_season,
    },
    content: {
      title: item.title.rendered,
      text: item.content.rendered,
      image: getFeaturedImage(item._embedded["wp:featuredmedia"]),
    },
    services: getTagsByType(item._embedded["wp:term"]),
    response,
  };
});
