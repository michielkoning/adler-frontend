<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <section
    :aria-label="title"
    class="item"
  >
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>

<style lang="css" scoped>
.item {
  padding: var(--spacing-m);
  background: var(--color-background-alternative);
}
</style>
