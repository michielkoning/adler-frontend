<script lang="ts" setup>
import type { Archive } from '~/types/Archive';

defineProps<{
  items: Archive[]
}>()

</script>

<template>
  <ul v-if="items.length" class="list">
    <HighlightsListItem v-for="item in items" :key="item.id" :item="item" />

  </ul>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.list {
  @mixin list-reset;

  margin-bottom: var(--spacing-m);
  display: grid;
  gap: var(--spacing-l);

  @media (--viewport-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
