import { z } from 'zod'

const SeoImagesSchema = z
  .array(
    z.object({
      width: z
        .string()
        .or(z.number())
        .transform(val => Number(val)),
      height: z
        .string()
        .or(z.number())
        .transform(val => Number(val)),
      url: z.string(),
      type: z
        .enum(['image/jpeg', 'image/gif', 'image/png', ''])
        .transform((val) => {
          if (val === '') {
            return undefined
          }
          return val
        }),
    }),
  )
  .default([])

export const SeoSchema = z.object({
  title: z.string(),
  description: z.string().default(''),
  og_title: z.string(),
  og_description: z.string().optional(),
  article_modified_time: z.string().optional(),
  og_image: SeoImagesSchema,
})
