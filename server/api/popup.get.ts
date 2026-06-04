import { z } from 'zod'
import { LocaleSchema } from '../schemas/LocaleSchema'
import { PopupSchema } from '../schemas/PopupSchema'

const querySchema = z.object({
  locale: LocaleSchema,
})

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, body => parseData(body, querySchema))

  const { apiUrl } = useAppConfig()

  const response = await $fetch(`${apiUrl}adler/v1/popup`)

  const parsed = parseData(response, PopupSchema)

  if (!parsed[query.locale] || !parsed.activate) {
    setResponseStatus(event, 204)
  }
  return {
    ...parsed[query.locale],
    image: parsed.image,
  }
})
