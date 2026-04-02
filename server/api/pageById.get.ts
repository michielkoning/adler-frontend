import { z } from 'zod'
import { PageSchema } from '../schemas/PageSchema'
import type { Page } from '~/types/Page'
import { getUrl } from '../utils/getUrl'
import { getFeaturedImage } from '../utils/getFeaturedImage'
import { createSeo } from '../utils/createSeo'

const querySchema = z.object({
  slug: z.string().optional(),
  id: z.string().optional(),
})

export default defineCachedEventHandler(async (event): Promise<Page> => {
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
    id: query.data.id,
    type: 'pages',
    fields: [
      'slug',
      'title',
      'content',
      'parent',
      'acf',
      'excerpt',
      'yoast_head_json',
      'locales',
    ],
  })

  const response = await $fetch(url)

  const parsed = parseData(response, PageSchema)

  if (!parsed) {
    throw createError({
      statusText: 'Page not found',
    })
  }

  const item = parsed

  return {
    id: item.id,
    slug: item.slug,
    parentId: 0,
    content: {
      id: item.id,
      title: item.title.rendered,
      text: item.content.rendered,
      image: getFeaturedImage(item['wp:featuredmedia']),
      gallery: [],
    },
    seo: createSeo(item.yoast_head_json),
    locales: item.locales,
  }
}, {
  maxAge: 60 * 60,
})
