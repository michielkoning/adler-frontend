import type { z } from 'zod'
import type { TermsListSchema } from '../schemas/TermsSchema'

export const getTagsByType = (terms: z.infer<typeof TermsListSchema>, type: 'service' | 'service_last_minute') => {
  if (!terms.length) {
    return []
  }
  const tags = terms[0]?.filter(tag => tag.taxonomy === type)
  if (!tags) {
    return []
  }

  return tags.map(tag => tag.name)
}
