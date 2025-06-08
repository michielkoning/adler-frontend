<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/zimmer",
    en: "/rooms",
    nl: "/kamers",
  },
});

const { pageIds } = useAppConfig();

const { data, error } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.roomsPageId),
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <the-page v-if="data" v-bind="data.content" :show-resmio="false">
    <rooms-list />
  </the-page>
</template>
