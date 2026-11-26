import { z } from 'zod'
import { FeaturedImageSchema } from './FeaturedImageSchema'
import { TermsListSchema } from './TermsSchema'

export const LastMinutesSchema = z.array(
  z.object({
    'id': z.number(),
    'slug': z.string(),
    'title': z.object({
      rendered: z.string(),
    }),
    'wp:featuredmedia': z.array(FeaturedImageSchema).default([]),
    '_embedded': z.object({
      'wp:term': TermsListSchema,
    }),

    'acf': z.object({
      room: z.object({
        ID: z.number(),
      }),
      dates: z.object({
        date_from: z.string().transform(val => convertToDate(val)),
        date_untill: z.string().transform(val => convertToDate(val)),
      }),
      prices: z.array(
        z.object({
          kids: z.coerce.number(),
          adults: z.coerce.number(),
          price: z.string(),
        }),
      ),
      sold: z.boolean(),
    }),
  }),
)
