<script lang="ts" setup>
  import { LastMinutesSection } from "#components";

  definePageMeta({
    i18n: {
      paths: {
        de: "/last-minutes",
        en: "/last-minutes",
        nl: "/last-minutes",
      },
    },
  });

  const { pageIds } = useAppConfig();

  const { error } = await useFetch("/api/pageById", {
    params: {
      id: getPageId(pageIds.lastMinutePageId),
    },
  });

  if (error.value) {
    throw createError(error.value);
  }
</script>

<template>
  <last-minutes-section />
</template>
