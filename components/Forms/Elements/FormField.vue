<template>
  <div>
    <label :for="id" :class="$style.label">{{ title }}</label>
    <slot />
    <error-message :error-message="errorMessage" />
  </div>
</template>

<script>
import ErrorMessage from '~/components/Forms/Elements/ErrorMessage.vue'

export default {
  components: {
    ErrorMessage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" module>
.label {
  display: block;
  margin-bottom: var(--spacing-xxs);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}
</style>
