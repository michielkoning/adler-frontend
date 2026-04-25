import type { Image } from '~~/shared/types/Image'
import type { Room } from '~~/shared/types/Room'

export type LastMinute = {
  id: number
  link: string
  title: string
  room: Room
  image?: Image
  isSold: boolean
  prices: {
    kids: number
    adults: number
    price: string
  }[]
  dates: {
    from?: Date
    until?: Date
  }
}
