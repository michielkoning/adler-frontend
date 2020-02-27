<template>
  <div>
    <notch-wrapper>
      <div :class="$style.page">
        <div>
          <article :class="$style.body">
            <!-- eslint-disable-next-line -->
            <h1 v-html="page.title" />
            <the-intro v-if="page.content" :text="page.content" />
          </article>
          <slot />
        </div>
        <image-hero :image="page.featuredImage" :class="$style.image" />
        <slot name="sidebar" />
      </div>
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
.page {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1em;
}

.image {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
</style>
