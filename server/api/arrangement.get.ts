import { z } from 'zod'
import { ArrangementSchema } from '../schemas/ArrangementSchema'
import { getUrl } from '../utils/getUrl'
import { getFeaturedImage } from '../utils/getFeaturedImage'
import { LocaleSchema } from '../schemas/LocaleSchema'
import type { Content } from '~/types/Content'

const querySchema = z.object({
  locale: LocaleSchema,
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
    slug: query.data.slug,
    type: 'arrangement',
    fields: ['slug', 'title', 'content', 'acf', 'locales'],
  })

  const response = await $fetch(url)

  const parsed = parseData(response, ArrangementSchema)

  if (!parsed.length) {
    throw createError({
      statusText: 'Page not found',
    })
  }

  const item = parsed[0]

  if (!item) {
    throw createError({
      statusText: 'Page not found',
    })
  }

  const content: Content = {
    id: item.id,
    title: item.title.rendered,
    text: item.content.rendered,
    image: getFeaturedImage(item['wp:featuredmedia']),
    gallery: [],

  }

  return {
    id: item.id,
    slug: item.slug,
    prices: item.acf.prices,
    content,
    locales: item.locales,
  }
}, {
  maxAge: 60 * 60,
})
