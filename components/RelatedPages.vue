<script lang="ts" setup>
const props = defineProps<{
  parentId: number
}>()

const { locale } = useI18n();

const { data, error } = await useFetch("/api/relatedPages", {
  params: {
    parentId: props.parentId,
    locale,
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <archive-list v-if="data?.length" :items="data" />
</template>
