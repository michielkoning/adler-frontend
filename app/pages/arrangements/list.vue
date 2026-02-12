<script lang="ts" setup>
definePageMeta({
  i18n: {
    paths: {
      de: '/arrangements',
      en: '/arrangements',
      nl: '/arrangementen',
    },
  },
})

const { pageIds } = useAppConfig()
const { locale } = useI18n()

const { data, error } = useFetch('/api/pageById', {
  query: {
    id: getPageId(pageIds.arrangementsPageId),
    locale,
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
    :show-resmio="false"
  >
    <arrangments-list />
  </the-page>
</template>
