export const useMenu = () => {
  const router = useRouter()

  const activeMenuId = useActiveMenuId()

  router.afterEach(() => {
    setActiveMenuId(undefined)
  })

  const setActiveMenuId = (id?: number) => {
    activeMenuId.value = id
  }

  return {
    setActiveMenuId,
  }
}
