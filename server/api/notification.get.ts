import { z } from 'zod'
import { LocaleSchema } from '../schemas/LocaleSchema'
import { NotificationSchema } from '../schemas/NotificationSchema'

const querySchema = z.object({
  locale: LocaleSchema,
})

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, body => parseData(body, querySchema))

  const { apiUrl } = useAppConfig()

  const response = await $fetch(`${apiUrl}adler/v1/popup`)

  const parsed = parseData(response, NotificationSchema)

  if (!parsed[query.locale] || !parsed.activate) {
    setResponseStatus(event, 204)
  }
  return {
    ...parsed[query.locale],
    image: parsed.image,
  }
})
