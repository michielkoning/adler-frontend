import { z } from 'zod'
import { ArrangementSchema } from '../schemas/ArrangementSchema'
import { getUrl } from '../utils/getUrl'
import { getFeaturedImage } from '../utils/getFeaturedImage'
import { LocaleSchema } from '../schemas/LocaleSchema'
import type { Content } from '~~/shared/types/Content'
import type { Arrangement } from '~~/shared/types/Arangement'

const querySchema = z.object({
  locale: LocaleSchema,
  slug: z.string(),
})

export default defineCachedEventHandler(async (event): Promise<Arrangement> => {
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
    fields: ['slug', 'title', 'content', 'acf', 'yoast_head_json', 'locales'],
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

  return {
    id: item.id,
    slug: item.slug,
    prices: item.acf.prices,
    content: {
      id: item.id,
      title: item.title.rendered,
      text: item.content.rendered,
      image: getFeaturedImage(item['wp:featuredmedia']),
      gallery: [],
    },
    locales: item.locales,
    seo: createSeo(item.yoast_head_json),
  }
}, {
  maxAge: 60 * 60,
})
