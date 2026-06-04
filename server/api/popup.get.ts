import { z } from 'zod'
import { LocaleSchema } from '../schemas/LocaleSchema'
import { PopupSchema } from '../schemas/PopupSchema'

const querySchema = z.object({
  locale: LocaleSchema,
})

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, body =>
    querySchema.safeParse(body),
  )

  if (!query.success) {
    throw createError({
      statusText: 'Invalid arguments',
      data: query.error.format(),
    })
  }

  const { apiUrl } = useAppConfig()

  const response = await $fetch(`${apiUrl}adler/v1/popup`)

  const parsed = parseData(response, PopupSchema)

  if (!parsed[query.data.locale] || !parsed.activate) {
    setResponseStatus(event, 204)
  }
  return {
    ...parsed[query.data.locale],
    image: parsed.image,
  }
})
