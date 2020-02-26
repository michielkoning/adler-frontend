<template>
  <div v-if="generatedImage" class="hero">
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
  position: relative;
  text-shadow: var(--text-shadow);
  color: var(--color-white);
  height: 8rem;
  @media (--viewport-sm) {
    height: 20rem;
  }

  &.large {
    height: 10rem;
    @media (--viewport-sm) {
      height: 30rem;
    }
  }
}

.title {
  color: var(--color-white);
}

.wrapper {
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
