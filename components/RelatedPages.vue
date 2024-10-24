<script lang="ts" setup>
const { data } = useFetch("/api/relatedPages", {
  params: {
    parentId: 3668,
  },
});
</script>

<template>
  <archive-list v-if="data?.length" :items="data" />
</template>
