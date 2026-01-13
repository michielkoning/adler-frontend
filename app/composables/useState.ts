export const useMenuIsOpen = () => useState<boolean>('menuIsOpen', () => false)
export const useActiveMenuId = () => useState<number | undefined>(() => undefined)
