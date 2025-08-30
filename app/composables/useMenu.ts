export const useMenu = () => {
  const activeMenuId = useState<number | undefined>(() => undefined);

  const setActiveMenuId = (id?: number) => {
    activeMenuId.value = id;
  };

  return {
    activeMenuId,
    setActiveMenuId,
  };
};
