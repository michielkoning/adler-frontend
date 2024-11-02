<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/zimmer",
    en: "/rooms",
    nl: "/kamers",
  },
});

const { pageIds } = useAppConfig();

const { data } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.roomsPageId),
  },
});
</script>

<template>
  <app-page v-if="data" v-bind="data.content">
    <rooms-list />
  </app-page>
</template>
