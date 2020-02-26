<template>
  <article :class="wrapper">
    <notch-wrapper>
      <image-hero :image="page.featuredImage" class="image" />
      <!-- eslint-disable-next-line -->
      <h1 v-html="page.title" />
      <the-intro v-if="page.content" :text="page.content" />
      <slot />
    </notch-wrapper>
  </article>
</template>

<script>
import TheIntro from '@/components/TheIntro.vue'
import NotchWrapper from '@/components/Layout/NotchWrapper.vue'
import ImageHero from '@/components/Images/ImageHero.vue'

export default {
  components: {
    ImageHero,
    TheIntro,
    NotchWrapper,
  },
  props: {
    page: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" module>
.wrapper {
  @mixin center;
}
</style>
