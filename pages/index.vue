<script lang="ts" setup>
const { data } = useFetch("/api/pages", {
  params: {
    slug: "speeltuin",
  },
});
</script>

<template>
  <app-page v-if="data" :title="data.title" :content="data.content" />
</template>
