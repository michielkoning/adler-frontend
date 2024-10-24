<script lang="ts" setup>
import { Content } from '~/types/Content';

defineProps<Content>()
</script>

<template>
  <div>
    <center-wrapper>
      <div class="page">
        <image-hero v-if="image" v-bind="image" class="image" />

        <div>
          <article class="body">
            <!-- eslint-disable-next-line -->
            <h1 v-html="title" id="content" tabindex="-1" />
            <!-- <post-date v-if="page.date" :date="page.date" /> -->
            <!-- eslint-disable-next-line -->
            <div v-html="text" />
          </article>
          <slot />
        </div>

        <!-- <gallery-list
          v-if="page.galleryGroup && page.galleryGroup.gallery"
          :title="page.title"
          class="gallery"
          :gallery="page.galleryGroup.gallery"
        />
        _ -->

        <aside class="sidebar">
          <slot name="sidebar" />
          <!-- <resmio-widget v-if="showResmio" /> -->
        </aside>
      </div>
      <!-- <client-only>
        <giggle-widget
          v-if="page.Giggle && page.Giggle.giggleWidget"
          :stream="page.Giggle.giggleWidget"
        />
      </client-only> -->
    </center-wrapper>

    <arrangements-highlights-section />
  </div>
</template>

<style lang="postcss" scoped>
@import '~/assets/css/media-queries/media-queries.css';

.page {
  display: grid;
  align-items: start;
  gap: var(--gutter);
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
