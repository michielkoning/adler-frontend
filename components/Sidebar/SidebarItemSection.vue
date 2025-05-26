<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <section :aria-label="title" class="item">
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>

<style lang="postcss" scoped>
.item {
  background: var(--color-background-alternative);
  padding: var(--spacing-m);
}
</style>
