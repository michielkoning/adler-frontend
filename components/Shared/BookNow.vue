<template>
  <div :class="$style.wrapper">
    <app-button :is-full-width="true" size="large" @click="$emit('trigger')">
      {{ titleWithFallback }}
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
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    titleWithFallback() {
      if (this.title) {
        return this.title
      }
      return this.$t('bookNow')
    },
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
