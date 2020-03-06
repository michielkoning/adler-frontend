<template>
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
      <aside>
        <slot name="sidebar" />
      </aside>
    </div>
  </notch-wrapper>
</template>

<script>
import TheIntro from '~/components/Shared/TheIntro.vue'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import ImageHero from '~/components/Images/ImageHero.vue'

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
  grid-gap: 1em;
  margin-bottom: var(--spacing-xl);

  @media (--viewport-sm) {
    grid-template-columns: 2fr 1fr;
  }
}

.image {
  grid-row: 1 / 2;
  @media (--viewport-sm) {
    grid-column: 1 / 3;
  }
}
</style>
