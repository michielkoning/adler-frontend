<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/privacy-policy",
    en: "/privacy-policy",
    nl: "/privacy-policy",
  },
});

const { pageIds } = useAppConfig();

const { data, error } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.contactPageId),
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <app-page v-if="data" v-bind="data.content" />
</template>
