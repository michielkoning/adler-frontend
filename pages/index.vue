<script lang="ts" setup>
defineI18nRoute({
  paths: {
    nl: "/",
  },
});

const { pageIds } = useAppConfig();

const { locale } = useI18n();

const getPageId  = (pageId: {
  nl: number,
  de: number,
  en: number,
}, locale: string) => {
  switch (locale) {
    case 'nl': return pageId.nl
    case 'en': return pageId.en
    default: return pageId.de
  }
}

const { data } = await useFetch("/api/pageById", {
  params: {
    id:  getPageId(pageIds.homePageId, locale.value),
  },
});
</script>

<template>
  <div>
    {{ locale }}
    <app-page v-if="data" v-bind="data.content">
      <related-pages :parent-id="data.id" />
    </app-page>
    <facilities-section />
  </div>
</template>
