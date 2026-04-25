import type { Content } from '~~/shared/types/Content'
import type { Seo } from '~~/shared/types/Seo'

export type Post = {
  id: number
  slug: string
  content: Content
  seo: Seo
  locales: {
    de?: string
    nl?: string
    en?: string
  }
}
