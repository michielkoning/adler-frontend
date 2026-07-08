export const useMenuIsOpen = () => useState<boolean>('menuIsOpen', () => false)
export const useActiveMenuIds = () => useState<string[]>(() => [])
