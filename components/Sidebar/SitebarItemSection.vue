<template>
  <section :aria-labelledby="id" :class="$style.item">
    <h1 :id="id">{{ title }}</h1>
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
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
