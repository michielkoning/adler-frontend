<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <fieldset class="fieldset">
    <legend class="sr-only">{{ title }}</legend>
    <div class="fields">
      <slot />
    </div>
  </fieldset>
</template>

<style lang="postcss" scoped>
.fieldset {
  border: 0;
  padding: 0;
  margin: 0 0 var(--spacing-m);
  min-width: 0;
}

.fieldset + .fieldset {
  border-top: 1px solid var(--color-gray);
  padding-top: var(--spacing-m);
}

.fields {
  display: grid;
  grid-gap: var(--gutter);
}
</style>
