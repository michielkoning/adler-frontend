<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/last-minute",
    en: "/last-minute",
    nl: "/last-minute",
  },
});

const { pageIds } = useAppConfig();

const { data, error } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.lastMinutePageId),
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <app-page v-if="data" v-bind="data.content" />
</template>
