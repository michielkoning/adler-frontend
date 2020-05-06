<template>
  <div :class="$style.wrapper">
    <app-button :is-full-width="true" size="large" @click="$emit('trigger')">
      {{ $t('bookNow') }}
    </app-button>
    <slot />
  </div>
</template>

<script>
import AppButton from '~/components/Shared/AppButton.vue'

export default {
  components: {
    AppButton,
  },
}
</script>

<style lang="postcss" module>
.wrapper {
  @media (--viewport-sm) {
    grid-column: span 2;
  }

  @media (--viewport-lg) {
    grid-column: span 1;
  }
}
</style>
