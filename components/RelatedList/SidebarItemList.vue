<script lang="ts" setup>
import type { Archive } from '~/types/Archive';

defineProps<{
  items: Archive[]
}>()
</script>

<template>
  <ul class="list">
    <sidebar-item-list-item
      v-for="item in items"
      :key="item.id"
      v-bind="item"
    />
  </ul>
</template>



<style lang="postcss" scoped>
.list {
  @mixin list-reset;

  & > li {
    margin-bottom: var(--spacing-s);
  }
}
</style>
