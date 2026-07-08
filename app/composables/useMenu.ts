export const useMenu = () => {
  const openMenus: Ref<string[]> = ref([])
  const menuIsOpen = useMenuIsOpen()

  const add = (menuId: string) => {
    if (openMenus.value.includes(menuId)) {
      return
    }
    openMenus.value.push(menuId)
  }

  const closeMobileMenu = () => {
    menuIsOpen.value = false
  }

  const remove = (menuId: string) => {
    openMenus.value = openMenus.value.filter(menu => menu !== menuId)
  }

  const clear = () => {
    openMenus.value = []
    closeMobileMenu()
  }

  const openMobileMenu = () => {
    menuIsOpen.value = true
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
    openMenus,
    add,
    remove,
    clear,
    openMobileMenu,
    closeMobileMenu,
    togleMobileMenu,
  }
}
