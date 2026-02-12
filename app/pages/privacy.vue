<script lang="ts" setup>
definePageMeta({
  i18n: {
    paths: {
      de: '/privacy-policy',
      en: '/privacy-policy',
      nl: '/privacy-policy',
    },
  },
})

const { pageIds } = useAppConfig()

const { data, error } = useFetch('/api/pageById', {
  query: {
    id: getPageId(pageIds.privacyPageId),
  },
})

if (error.value) {
  throw createError(error.value)
}
</script>

<template>
  <the-page
    v-if="data"
    v-bind="data.content"
  />
</template>
