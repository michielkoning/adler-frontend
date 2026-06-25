<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <fieldset class="fieldset">
    <legend class="sr-only">
      {{ title }}
    </legend>
    <div class="fields">
      <slot />
    </div>
  </fieldset>
</template>

<style lang="css" scoped>
.fieldset {
  min-inline-size: 0;
  padding: 0;
  margin: 0 0 var(--spacing-4);
  border: 0;
}

.fieldset + .fieldset {
  padding-block-start: var(--spacing-4);
  border-block-start: 1px solid var(--color-gray);
}

.fields {
  display: grid;
  grid-template-columns: repeat(var(--columns, 1), 1fr);
  gap: var(--gutter);
}
</style>
