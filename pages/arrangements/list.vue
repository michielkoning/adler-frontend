<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/arrangements",
    en: "/arrangements",
    nl: "/arrangementen",
  },
});

const { pageIds } = useAppConfig();

const { data, error } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.arrangementsPageId),
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <app-page v-if="data" v-bind="data.content" />
</template>
