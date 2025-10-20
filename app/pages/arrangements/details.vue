<script lang="ts" setup>
definePageMeta({
  i18n: {
    paths: {
      de: '/arrangements/[slug]',
      en: '/arrangements/[slug]',
      nl: '/arrangementen/[slug]',
    },
  },
})

const route = useRoute()
const { locale } = useI18n()
const setI18nParams = useSetI18nParams()

const { data, error } = await useFetch('/api/arrangement', {
  params: {
    slug: route.params.slug,
    locale,
  },
})

if (error.value) {
  throw createError(error.value)
}

setI18nParams({
  de: data.value?.locales.de ? { slug: data.value?.locales.de } : undefined,
  nl: data.value?.locales.nl ? { slug: data.value?.locales.nl } : undefined,
  en: data.value?.locales.en ? { slug: data.value?.locales.en } : undefined,
})
</script>

<template>
  <the-page
    v-if="data"
    v-bind="data.content"
    :show-resmio="false"
  >
    <arrangement-prices :prices="data.prices" />

    <template #sidebar>
      <btn-book-arrangement :title="data.content.title" />
      <related-arrangement-section :exclude="data.id" />
    </template>
  </the-page>
</template>
