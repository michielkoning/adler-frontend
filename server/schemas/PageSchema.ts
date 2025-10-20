import { z } from 'zod'
import { FeaturedImageSchema } from './FeaturedImageSchema'
import { GallerySchema } from './GallerySchema'
import { SeoSchema } from './SeoSchema'
import { LocalesSchema } from './LocalesSchema'

export const PageSchema = z.object({
  'id': z.number(),
  'slug': z.string(),
  'title': z.object({
    rendered: z.string(),
  }),
  'content': z.object({
    rendered: z.string(),
  }),
  'wp:featuredmedia': z.array(FeaturedImageSchema).default([]),
  'parent': z.number(),
  'acf': z.object({
    gallery: GallerySchema,
  }),
  'yoast_head_json': SeoSchema,
  'locales': LocalesSchema,
})

export const PageListSchema = z.array(PageSchema)
