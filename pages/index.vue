<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/",
    en: "/",
    nl: "/",
  },
});

const { pageIds } = useAppConfig();

const { data, error } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.homePageId),
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <home-hero v-if="data" :image="data.content.image" />
  <facilities-section />
</template>
