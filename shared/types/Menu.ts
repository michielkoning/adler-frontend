type Link = {
  title: string
  id: number
  link: string
}

export type MenuItem = Link & {
  children: Link[]
}
