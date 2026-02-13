<script lang="ts" setup>
const props = defineProps<{
  parentId: number
  exclude: number
}>()

const { locale } = useI18n()

const localePath = useLocalePath()

const { data, error } = await useFetch('/api/pages', {
  query: {
    exclude: props.exclude,
    parentId: props.parentId,
    locale,
  },
  transform: (response) => {
    return response.map((item) => {
      return {
        ...item,
        link: localePath(item.link),
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
    :title="$t('relatedPages')"
  />
</template>
