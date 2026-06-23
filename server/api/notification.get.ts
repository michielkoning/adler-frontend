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

  
  return {
    ...parsed[query.locale],
    activate: parsed.activate,
    image: parsed.image,
  }
})
