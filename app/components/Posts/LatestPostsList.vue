<script lang="ts" setup>
const localePath = useLocalePath()
const { locale } = useI18n()

const { data, error } = useFetch('/api/posts', {
  query: {
    locale,
    pageSize: 5,
  },
  transform: (response) => {
    return response.map((item) => {
      return {
        ...item,
        link: localePath({
          name: 'posts-details',
          params: {
            slug: item.link,
          },
        }),
      }
    })
  },
})

if (error.value) {
  throw createError(error.value)
}
</script>

<template>
  <related-list-section
    v-if="data && data.length"
    :items="data"
    :title="$t('latestPosts')"
  />
</template>
