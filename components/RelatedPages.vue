<script lang="ts" setup>
const props = defineProps<{
  parentId: number
}>()

const { data } = useFetch("/api/relatedPages", {
  params: {
    parentId: props.parentId,
  },
});
</script>

<template>
  <archive-list v-if="data?.length" :items="data" />
</template>
