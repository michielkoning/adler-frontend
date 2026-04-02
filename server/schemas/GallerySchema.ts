import { z } from 'zod'
import type { Image } from '~/types/Image'

export const GallerySchema = z
  .array(z.object({
    ID: z.number(),
    url: z.string(),
    alt: z.string(),
    width: z.number(),
    height: z.number(),
  }).transform((val): Image => {
    return {
      id: val.ID,
      src: val.url,
      alt: val.alt,
      width: val.width,
      height: val.height,
    }
  }),
  )
  .or(z.literal(false))
  .transform((val) => {
    if (val === false) {
      return []
    }
    return val
  })
