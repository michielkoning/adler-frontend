<script lang="ts" setup>
import { LastMinutesSection } from "#components";

defineI18nRoute({
  paths: {
    de: "/last-minute",
    en: "/last-minute",
    nl: "/last-minute",
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
