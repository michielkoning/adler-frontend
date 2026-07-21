export const useMenu = () => {
  const activeMenuIds = useActiveMenuIds()
  const menuIsOpen = useMenuIsOpen()

  const isActiveMenuItem = (menuId: string) => {
    return activeMenuIds.value.includes(menuId)
  }

  const addActiveMenuItem = (menuId: string) => {
    if (isActiveMenuItem(menuId)) {
      return
    }
    activeMenuIds.value.push(menuId)
  }

  const removeActiveMenuItem = (menuId: string) => {
    activeMenuIds.value = activeMenuIds.value.filter(id => id !== menuId)
  }

  const setActiveMenuItem = (menuId?: string) => {
    if (menuId) {
      activeMenuIds.value = [menuId]
    }
    else {
      activeMenuIds.value = []
    }
  }

  const toggleActiveMenuItem = (menuId: string) => {
    if (isActiveMenuItem(menuId)) {
      removeActiveMenuItem(menuId)
    }
    else {
      addActiveMenuItem(menuId)
    }
  }

  const closeMobileMenu = () => {
    menuIsOpen.value = false

    if (import.meta.client) {
      document.body.classList.remove('locked')
    }
  }

  const clear = () => {
    activeMenuIds.value = []
    closeMobileMenu()
  }

  const openMobileMenu = () => {
    menuIsOpen.value = true

    if (import.meta.client) {
      document.body.classList.add('locked')
    }
  }

  const togleMobileMenu = () => {
    if (menuIsOpen.value) {
      closeMobileMenu()
    }
    else {
      openMobileMenu()
    }
  }

  return {
    addActiveMenuItem,
    removeActiveMenuItem,
    toggleActiveMenuItem,
    isActiveMenuItem,
    clear,
    openMobileMenu,
    closeMobileMenu,
    togleMobileMenu,
    setActiveMenuItem,
  }
}
