<script lang="ts" setup>
const { locale } = useI18n()
const localePath = useLocalePath()

const { data, error } = useFetch('/api/rooms', {
  query: {
    locale,
  },
  transform: (response) => {
    return response.map((item) => {
      return {
        ...item,
        link: localePath({
          name: 'rooms-details',
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
  <archive-list
    v-if="data"
    :items="data"
  />
</template>
