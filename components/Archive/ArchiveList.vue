<script lang="ts" setup>
import type { Archive } from "~/types/Archive";

defineProps<{
  items: Archive[];
}>();
</script>

<template>
  <ul v-if="items.length" class="list">
    <archive-item v-for="item in items" :key="item.id" v-bind="item" />
  </ul>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.list {
  @mixin list-reset;

  margin: 0 calc(var(--gutter) / -2);

  @media (--viewport-md) {
    margin-right: 0;
  }

  & > li {
    margin-bottom: var(--spacing-s);
  }
}
</style>
