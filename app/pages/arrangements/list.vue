<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/arrangements",
    en: "/arrangements",
    nl: "/arrangementen",
  },
});

const { pageIds } = useAppConfig();
const { locale } = useI18n();

const { data, error } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.arrangementsPageId),
    locale,
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <the-page v-if="data" v-bind="data.content" :show-resmio="false">
    <arrangments-list />
  </the-page>
</template>
