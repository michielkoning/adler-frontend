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

        <gallery-list
          v-if="page.galleryGroup && page.galleryGroup.gallery"
          :title="page.title"
          :class="$style.gallery"
          :gallery="page.galleryGroup.gallery"
        />

        <image-hero v-else :image="page.featuredImage" :class="$style.image" />

        <aside :class="$style.sidebar">
          <slot name="sidebar" />
          <resmio-widget v-if="showResmio" />
        </aside>
      </div>
      <client-only>
        <giggle-widget
          v-if="page.Giggle && page.Giggle.giggleWidget"
          :stream="page.Giggle.giggleWidget"
        />
      </client-only>
    </center-wrapper>

    <arrangements-highlights-section />
  </div>
</template>

<script>
export default {
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
@import '~/styles/media-queries/media-queries.css';

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
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
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
