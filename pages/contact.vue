<script lang="ts" setup>
defineI18nRoute({
  paths: {
    de: "/kontakt",
    en: "/contact",
    nl: "/contact",
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
  <the-page v-if="data" v-bind="data.content" />
</template>
