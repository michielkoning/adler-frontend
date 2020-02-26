<template>
  <div v-if="image" class="hero">
    <image-hero :image="image" class="image" />
  </div>
</template>

<script>
import ImageHero from '@/components/Images/ImageHero.vue'

export default {
  components: {
    ImageHero,
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.hero {
  height: 8rem;
  margin-bottom: 1em;
  @media (--viewport-md) {
    height: 20rem;
  }
}
</style>
