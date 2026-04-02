import { z } from 'zod'
import { PostSchema } from '../schemas/PostSchema'
import { getUrl } from '../utils/getUrl'
import { getFeaturedImage } from '../utils/getFeaturedImage'

const querySchema = z.object({
  slug: z.string(),
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
    type: 'posts',
    fields: ['title', 'slug', 'content', 'date', 'locales'],
    slug: query.data.slug,
  })

  const response = await $fetch(url)

  const parsed = parseData(response, PostSchema)

  if (!parsed.length) {
    throw createError({
      statusText: 'Post not found',
    })
  }

  const item = parsed[0]

  if (!item) {
    throw createError({
      statusText: 'Post not found',
    })
  }

  return {
    id: item.id,
    slug: item.slug,
    content: {
      id: item.id,
      title: item.title.rendered,
      text: item.content.rendered,
      date: item.date,
      image: getFeaturedImage(item['wp:featuredmedia']),
    },
    locales: item.locales,
  }
}, {
  maxAge: 60 * 60,
})
