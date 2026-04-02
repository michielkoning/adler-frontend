import { z } from 'zod'
import { RoomListSchema } from '../schemas/RoomSchema'
import { getTagsByType } from '../utils/getTagsByType'
import { getUrl } from '../utils/getUrl'
import { getFeaturedImage } from '../utils/getFeaturedImage'

const querySchema = z.object({
  slug: z.string(),
  locale: z.string(),
})

export default defineCachedEventHandler(async (event) => {
  const query = await getValidatedQuery(event, body =>
    querySchema.safeParse(body),
  )

  if (!query.success) {
    throw createError({
      statusText: 'Invalid arguments',
      data: query.error.format(),
    })
  }
  const url = getUrl({
    image: true,
    type: 'room',
    fields: ['title', 'slug', 'content', 'acf', 'locales'],
    slug: query.data.slug,
  })

  const response = await $fetch(url)

  const parsed = parseData(response, RoomListSchema)

  if (!parsed.length) {
    throw createError({
      statusText: 'Room not found',
    })
  }

  const item = parsed[0]

  if (!item) {
    throw createError({
      statusText: 'Room not found',
    })
  }

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
      id: item.id,
      title: item.title.rendered,
      text: item.content.rendered,
      image: getFeaturedImage(item['wp:featuredmedia']),
      gallery: item.acf.gallery,
    },
    services: getTagsByType(item._embedded['wp:term']),
    locales: item.locales,
  }
}, {
  maxAge: 60 * 60,
})
