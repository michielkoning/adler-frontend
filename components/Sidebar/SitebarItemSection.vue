<template>
  <section :aria-label="title" :class="$style.item">
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss" module>
.item {
  background: var(--color-background-alternative);
  padding: var(--spacing-m);
}
</style>
