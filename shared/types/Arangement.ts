import type { Content } from '~~/shared/types/Content'
import type { Seo } from '~~/shared/types/Seo'

export type ArrangementPrice = {
  label: string
  value: number
  nights: number
  adults: number
  kids: number
  age_kids: number
  extra_night: number
}

export type ArrangementPrices = ArrangementPrice[]

export type Arrangement = {
  id: number
  content: Content
  slug: string
  prices: ArrangementPrices
  // relatedArrangements: Archive[]
  seo: Seo
  locales: {
    de?: string
    nl?: string
    en?: string
  }
}
