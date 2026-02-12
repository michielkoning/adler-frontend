<script lang="ts" setup>
definePageMeta({
  i18n: {
    paths: {
      de: '/last-minutes',
      en: '/last-minutes',
      nl: '/last-minutes',
    },
  },
})

const { pageIds } = useAppConfig()

const { error } = useFetch('/api/pageById', {
  query: {
    id: getPageId(pageIds.lastMinutePageId),
  },
})

if (error.value) {
  throw createError(error.value)
}
</script>

<template>
  <div />
  <!-- <last-minutes-section /> -->
</template>
