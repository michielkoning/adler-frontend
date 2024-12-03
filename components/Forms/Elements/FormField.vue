<script lang="ts" setup>
defineProps<{
  id: string;
  title: string;
  errorMessage?: string;
}>()

</script>

<template>
  <div>
    <label :for="id" class="label">{{ title }}</label>
    <slot />
    <form-error-message :errorMessage="errorMessage" class="error-message" />
  </div>
</template>

<style lang="postcss" scoped>
.label {
  display: block;
  margin-bottom: var(--spacing-xxs);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}

.error-message {
  display: block;
  margin-top: var(--spacing-xxs);
}
</style>

