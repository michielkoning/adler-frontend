<template>
  <div>
    <notch-wrapper>
      <article :class="$style.body">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h1 v-html="page.title" />
        <the-intro v-if="page.content" :text="page.content" />
        <image-hero :image="page.featuredImage" :class="$style.image" />
      </article>
      <slot />
    </notch-wrapper>
  </div>
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
.body {
  display: flex;
  flex-direction: column;
}

.image {
  order: -1;
}
</style>
