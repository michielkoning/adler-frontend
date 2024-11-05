<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/",
    en: "/",
    nl: "/",
  },
});

const { pageIds } = useAppConfig();

const { data } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.homePageId),
  },
});
</script>

<template>
  <div>
    <app-page v-if="data" v-bind="data.content" />
    <facilities-section />
  </div>
</template>
