import type { Content } from '~~/shared/types/Content'
import type { Seo } from '~~/shared/types/Seo'

export type RoomPrices = {
  fullBoardHighSeason?: number
  halfBoardHighSeason?: number
  fullBoardLowSeason?: number
  halfBoardLowSeason?: number
}

export type Room = {
  id: number
  content: Content
  slug: string
  prices: RoomPrices
  bookUrl: string
  services: string[]
  seo: Seo
  locales: {
    de?: string
    nl?: string
    en?: string
  }
}
