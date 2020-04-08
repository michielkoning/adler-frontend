<template>
  <notch-wrapper>
    <div :class="$style.page">
      <div>
        <article :class="$style.body">
          <!-- eslint-disable-next-line -->
          <h1 v-html="page.title" />
          <post-date v-if="page.date" :date="page.date" />
          <!-- eslint-disable-next-line -->
          <div v-html="page.content" />
        </article>
        <slot />
      </div>
      <gallery-list
        v-if="page.galleryGroup && page.galleryGroup.gallery"
        :title="page.title"
        :class="$style.gallery"
        :gallery="page.galleryGroup.gallery"
      />
      <image-hero v-else :image="page.featuredImage" :class="$style.image" />
      <aside :class="$style.sidebar">
        <slot name="sidebar" />
        <resmio-widget />
      </aside>
    </div>
  </notch-wrapper>
</template>

<script>
import PostDate from '@/components/Shared/PostDate.vue'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import ImageHero from '~/components/Images/ImageHero.vue'
import ResmioWidget from '~/components/Shared/Resmio.vue'
import GalleryList from '~/components/Gallery/GalleryList.vue'

export default {
  components: {
    PostDate,
    ImageHero,
    NotchWrapper,
    ResmioWidget,
    GalleryList,
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
  align-items: start;
  grid-gap: var(--gutter);
  margin-bottom: var(--spacing-xl);

  @media (--viewport-md) {
    grid-template-columns: 2fr 1fr;
  }
}

.gallery,
.image {
  grid-row: 1 / 2;

  @media (--viewport-md) {
    grid-column: 1 / 3;
  }
}

.sidebar {
  display: grid;
  grid-gap: var(--gutter);

  @media (--viewport-sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--viewport-md) {
    grid-template-columns: 1fr;
  }
}
</style>
