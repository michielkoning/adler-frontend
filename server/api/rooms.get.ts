import type { Archive } from '~~/shared/types/Archive'
import { RoomsSchema } from '../schemas/RoomsSchema'
import { getUrl } from '../utils/getUrl'
import { getFeaturedImage } from '../utils/getFeaturedImage'
import { z } from 'zod'
import { LocaleSchema } from '../schemas/LocaleSchema'

const querySchema = z.object({
  locale: LocaleSchema,
  exclude: z
    .string()
    .optional()
    .transform(val => Number(val)),
})

export default defineCachedEventHandler(async (event): Promise<Archive[]> => {
  const query = await getValidatedQuery(event, body => parseData(body, querySchema))

  const url = getUrl({
    image: true,
    type: 'room',
    fields: ['title', 'slug', 'excerpt', 'acf'],
    exclude: query.exclude,
    locale: query.locale,
    orderby: 'menu_order',
    order: 'asc',
  })

  const response = await $fetch(url)

  const parsed = parseData(response, RoomsSchema)

  return parsed.map((item) => {
    return {
      id: item.id,
      title: item.title.rendered,
      link: item.slug,
      text: item.excerpt.rendered,
      image: getFeaturedImage(item['wp:featuredmedia']),
      price: item.acf.price_from,
    }
  })
}, {
  maxAge: 60 * 60,
})
