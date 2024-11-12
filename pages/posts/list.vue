<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/blog",
    en: "/blog",
    nl: "/blog",
  },
});

const { pageIds } = useAppConfig();

const { data, error } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.postsPageId),
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <app-page v-if="data" v-bind="data.content">
    <posts-list />
  </app-page>
</template>
