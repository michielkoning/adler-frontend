export type MenuItem = {
  title: string
  id: number
  link: string
  children: {
    title: string
    id: number
    link: string
  }[]
}
