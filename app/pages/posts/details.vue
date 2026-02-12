<script lang="ts" setup>
definePageMeta({
  i18n: {
    paths: {
      de: '/blog/[slug]',
      en: '/blog/[slug]',
      nl: '/blog/[slug]',
    },
  },
})

const route = useRoute()
const setI18nParams = useSetI18nParams()

const { data, error } = useFetch('/api/post', {
  query: {
    slug: route.params.slug,
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
  >
    <template #sidebar>
      <related-posts-section :exclude="data.id" />
    </template>
  </the-page>
</template>
