<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/kontakt",
    en: "/contact",
    nl: "/contact",
  },
});

const { pageIds } = useAppConfig();

const { data } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.contactPageId),
  },
});
</script>

<template>
  <app-page v-if="data" v-bind="data.content" />
</template>
