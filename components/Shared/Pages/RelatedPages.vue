<script lang="ts" setup>
const props = defineProps<{
  parentId: number;
  exclude: number;
}>();

const { locale } = useI18n();

const { data, error } = await useFetch("/api/pages", {
  params: {
    exclude: props.exclude,
    parentId: props.parentId,
    locale,
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <related-list-section v-if="data" :items="data" :title="$t('relatedPages')" />
</template>
