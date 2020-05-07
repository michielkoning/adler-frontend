<template>
  <div>
    <center-wrapper>
      <div :class="$style.page">
        <div>
          <article :class="$style.body">
            <!-- eslint-disable-next-line -->
          <h1 v-html="page.title" id="content" tabindex="-1" />
            <post-date v-if="page.date" :date="page.date" />
            <!-- eslint-disable-next-line -->
          <div v-html="page.content" />
          </article>
          <slot />
        </div>
        <lazy-hydrate
          v-if="page.galleryGroup && page.galleryGroup.gallery"
          when-visible
        >
          <gallery-list
            :title="page.title"
            :class="$style.gallery"
            :gallery="page.galleryGroup.gallery"
          />
        </lazy-hydrate>
        <lazy-hydrate v-else ssr-only>
          <image-hero :image="page.featuredImage" :class="$style.image" />
        </lazy-hydrate>
        <aside :class="$style.sidebar">
          <slot name="sidebar" />
          <resmio-widget v-if="showResmio" />
        </aside>
      </div>
    </center-wrapper>
    <lazy-hydrate when-visible>
      <arrangements-highlights-section />
    </lazy-hydrate>
  </div>
</template>

<script>
import PostDate from '@/components/Shared/PostDate.vue'
import LazyHydrate from 'vue-lazy-hydration'
import CenterWrapper from '~/components/Layout/CenterWrapper.vue'
import ResmioWidget from '~/components/Shared/Resmio.vue'

export default {
  components: {
    LazyHydrate,
    PostDate,
    CenterWrapper,
    ResmioWidget,
    ImageHero: () => import('~/components/Images/ImageHero.vue'),
    GalleryList: () => import('~/components/Gallery/GalleryList.vue'),
    ArrangementsHighlightsSection: () =>
      import(
        '~/components/Arrangements/Highlights/ArrangementsHighlightsSection.vue'
      ),
  },
  props: {
    showResmio: {
      type: Boolean,
      default: true,
    },
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
  padding-top: var(--spacing-m);

  @media (--viewport-md) {
    padding-top: 0;
  }

  @media (--viewport-lg) {
    grid-template-columns: 2fr 1fr;
  }
}

.gallery,
.image {
  grid-row: 1 / 2;

  @media (--viewport-lg) {
    grid-column: 1 / 3;
  }
}

.sidebar {
  display: grid;
  grid-gap: var(--gutter);

  @media (--viewport-sm) {
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  }
}
</style>
