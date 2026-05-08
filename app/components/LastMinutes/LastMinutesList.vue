<script lang="ts" setup>
import type { LastMinute } from '~~/shared/types/LastMinute'

defineProps<{
  items: LastMinute[]
}>()
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

<style lang="css" scoped>
.list {
  @mixin list-reset;

  display: grid;
  gap: var(--spacing-l);
  margin-bottom: var(--spacing-m);

  @media (--md) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
