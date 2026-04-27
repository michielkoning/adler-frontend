import { z } from 'zod'
import { FeaturedImageSchema } from './FeaturedImageSchema'
import { LocalesSchema } from './LocalesSchema'
import { SeoSchema } from './SeoSchema'

export const PostSchema = z.array(
  z.object({
    'id': z.number(),
    'slug': z.string(),
    'date': z.string(),
    'title': z.object({
      rendered: z.string(),
    }),
    'content': z.object({
      rendered: z.string(),
    }),
    'wp:featuredmedia': z.array(FeaturedImageSchema).default([]),
    'locales': LocalesSchema,
    'yoast_head_json': SeoSchema,

  }),
)
