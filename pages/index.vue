<script lang="ts" setup>
const route = useRoute()
const { data } = useFetch('/api/pages', {
  params: {
    slug: 'speeltuin'
  }
})
</script>

<template>
  <app-page :title="data.title" v-if="data" :content="data.content" />
</template>