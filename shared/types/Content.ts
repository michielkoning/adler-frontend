import type { Image } from '~~/shared/types/Image'

export type Content = {
  id: number
  title: string
  text: string
  image?: Image
  date?: string
  gallery: Image[]
}
