<script lang="ts" setup>
const props = defineProps<{
  exclude: number
}>()

const { locale } = useI18n()

const localePath = useLocalePath()

const { data, error } = await useFetch('/api/arrangements', {
  query: {
    locale,
    exclude: props.exclude,
  },
  transform: (response) => {
    return response.map((item) => {
      return {
        ...item,
        link: localePath({
          name: 'arrangements-details',
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
    v-if="data"
    :items="data"
    :title="$t('relatedArrangements')"
  />
</template>
