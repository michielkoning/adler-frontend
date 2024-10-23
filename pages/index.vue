<script lang="ts" setup>
const route = useRoute()
const { data } = useFetch('/api/pages', {
  params: {
    slug: 'krimidinner-14-12-24-blutmond'
  }
})
</script>

<template>
  <app-page :title="data.title" v-if="data" :content="data.content" />
</template>