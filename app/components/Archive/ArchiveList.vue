<script lang="ts" setup>
import type { Archive } from '~~/shared/types/Archive'

defineProps<{
  items: Archive[]
}>()
</script>

<template>
  <ul
    v-if="items.length"
    class="list"
  >
    <archive-item
      v-for="item in items"
      :key="item.id"
      v-bind="item"
    />
  </ul>
</template>

<style lang="css" scoped>
.list {
  @mixin list-reset;

  margin: 0 calc(var(--gutter) / -2);

  @media (--md) {
    margin-inline-end: 0;
  }

  & > li {
    margin-block-end: var(--spacing-3);
  }
}
</style>
