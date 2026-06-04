import { z } from 'zod'
import { getFeaturedImage } from '../utils/getFeaturedImage'
import { getUrl } from '../utils/getUrl'
import { LocaleSchema } from '../schemas/LocaleSchema'
import { LastMinutesSchema } from '../schemas/LastMinutesSchema'

import type { LastMinute } from '~~/shared/types/LastMinute'

const querySchema = z.object({
  locale: LocaleSchema,
})

export default defineCachedEventHandler(async (event): Promise<LastMinute[]> => {
  const query = await getValidatedQuery(event, body => parseData(body, querySchema))

  const url = getUrl({
    image: true,
    lang: query.locale,
    type: 'last_minute',
    fields: ['slug', 'title', 'acf', 'locales'],
    locale: query.locale,
    orderby: 'menu_order',
    order: 'asc',
  })

  const response = await $fetch(url)

  const parsed = parseData(response, LastMinutesSchema)

  const getRoom = async (id: number) => {
    return await $fetch('/api/roomById', {
      params: {
        id,
      },
    })
  }

  const items = await parsed.map(async (item) => {
    return {
      id: item.id,
      link: item.slug,
      title: item.title.rendered,
      image: getFeaturedImage(item['wp:featuredmedia']),
      room: await getRoom(item.acf.room.ID),
      prices: item.acf.prices,
      isSold: item.acf.sold,
      dates: {
        from: item.acf.dates.date_from,
        until: item.acf.dates.date_untill,
      },
    }
  })

  return await Promise.all(items)
}, {
  maxAge: 60 * 60,
})
