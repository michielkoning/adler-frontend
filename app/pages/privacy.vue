<script lang="ts" setup>
definePageMeta({
  i18n: {
    paths: {
      de: "/privacy-policy",
      en: "/privacy-policy",
      nl: "/privacy-policy",
    },
  },
});

const { pageIds } = useAppConfig();

const { data, error } = await useFetch("/api/pageById", {
  params: {
    id: getPageId(pageIds.privacyPageId),
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <the-page v-if="data" v-bind="data.content" />
</template>
