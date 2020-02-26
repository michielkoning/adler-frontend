<template>
  <notch-wrapper>
    <article>
      <app-hero :image="page.featuredImage" />
      <!-- eslint-disable-next-line -->
      <the-intro v-if="page.content" :text="page.content" />
      <slot />
    </article>
  </notch-wrapper>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import NotchWrapper from '@/components/Layout/NotchWrapper.vue'
import TheIntro from '@/components/TheIntro.vue'

export default {
  components: {
    AppHero,
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
