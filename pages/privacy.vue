<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/privacy-policy",
    en: "/privacy-policy",
    nl: "/privacy-policy",
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
