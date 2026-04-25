import type { Image } from '~~/shared/types/Image'

export type Archive = {
  id: number
  title: string
  link: string
  text: string
  image?: Image
  date?: string
  price?: number
}
