export const getPageId = (pageId: { nl: number; de: number; en: number }) => {
  const { locale } = useI18n();
  switch (locale.value) {
    case "nl":
      return pageId.nl;
    case "en":
      return pageId.en;
    default:
      return pageId.de;
  }
};
