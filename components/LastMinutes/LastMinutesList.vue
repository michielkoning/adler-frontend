<script lang="ts" setup>
import type { LastMinute } from "~/types/LastMinute";

defineProps<{
  items: LastMinute[];
}>();
</script>

<template>
  <ul class="list">
    <last-minutes-list-item
      v-for="item in items"
      :key="item.id"
      v-bind="item"
    />
  </ul>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.list {
  @mixin list-reset;

  margin-bottom: var(--spacing-m);
  display: grid;
  grid-gap: var(--spacing-l);

  @media (--viewport-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
