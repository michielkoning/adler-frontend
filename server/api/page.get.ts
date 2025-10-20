import { z } from 'zod'
import { PageListSchema } from '../schemas/PageSchema'
import type { Page } from '~/types/Page'
import { getUrl } from '../utils/getUrl'
import { getFeaturedImage } from '../utils/getFeaturedImage'
import { createSeo } from '../utils/createSeo'

const querySchema = z.object({
  slug: z.string().optional(),
  id: z.string().optional(),
})

export default defineEventHandler(async (event): Promise<Page> => {
  const query = await getValidatedQuery(event, body =>
    querySchema.safeParse(body),
  )

  if (!query.success) {
    throw createError({
      statusMessage: 'Invalid arguments',
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
      'parent',
      'yoast_head_json',
      'locales',
    ],
  })

  const response = await $fetch(url)

  const parsed = parseData(response, PageListSchema)

  if (!parsed.length) {
    throw createError({
      statusMessage: 'Page not found',
    })
  }

  const item = parsed[0]

  return {
    id: item.id,
    slug: item.slug,
    parentId: item.parent,
    content: {
      title: item.title.rendered,
      text: item.content.rendered,
      image: getFeaturedImage(item['wp:featuredmedia']),
      gallery: item.acf.gallery?.map((image) => {
        return {
          src: image.url,
          width: image.width,
          height: image.height,
          alt: image.alt,
        }
      }),
    },
    seo: createSeo(item.yoast_head_json),
    locales: item.locales,
  }
})
