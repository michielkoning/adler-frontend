<script lang="ts" setup>
definePageMeta({
  i18n: {
    paths: {
      de: '/zimmer',
      en: '/rooms',
      nl: '/kamers',
    },
  },
})

const { pageIds } = useAppConfig()

const { data, error } = await useFetch('/api/pageById', {
  params: {
    id: getPageId(pageIds.roomsPageId),
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
    <rooms-list />
    <template #sidebar>
      <btn-book-room />
    </template>
  </the-page>
</template>
