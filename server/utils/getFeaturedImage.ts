import type { z } from 'zod'
import type { Image } from '~/types/Image'
import type { FeaturedImageSchema } from '../schemas/FeaturedImageSchema'

export const getFeaturedImage = (
  featuredImage: z.infer<typeof FeaturedImageSchema>[],
) => {
  if (!featuredImage.length) {
    return undefined
  }
  const image = featuredImage[0]

  if (!image) {
    return undefined
  }

  const result: Image = {
    id: image.id,
    alt: image.alt_text,
    width: image.media_details.width,
    height: image.media_details.height,
    src: image.media_details.file,
  }
  return result
}
