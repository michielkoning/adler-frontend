<script lang="ts" setup>
const { locale } = useI18n();

const props = withDefaults(
  defineProps<{
    pageSize?: number;
  }>(),
  {
    pageSize: 3,
  },
);

const { data, error } = await useFetch("/api/arrangements", {
  params: {
    pageSize: props.pageSize,
    locale,
  },
});

if (error.value) {
  throw createError(error.value);
}
</script>

<template>
  <ul v-if="data" class="list">
    <highlights-list-item v-for="item in data" :key="item.id" :item="item" />
  </ul>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.list {
  @mixin list-reset;

  margin-bottom: var(--spacing-m);
  display: grid;
  gap: var(--spacing-l);
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
}
</style>
