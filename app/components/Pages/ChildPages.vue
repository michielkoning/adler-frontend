<script lang="ts" setup>
const props = defineProps<{
  id: number;
}>();

const { locale } = useI18n();

const { data, error } = await useFetch("/api/pages", {
  params: {
    parentId: props.id,
    locale,
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <archive-list v-if="data" :items="data" />
</template>
