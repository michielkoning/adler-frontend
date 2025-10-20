export const useMenu = () => {
  const activeMenuId = useState<number | undefined>(() => undefined)

  const router = useRouter()

  router.afterEach(() => {
    setActiveMenuId(undefined)
  })

  const setActiveMenuId = (id?: number) => {
    activeMenuId.value = id
  }

  return {
    activeMenuId,
    setActiveMenuId,
  }
}
