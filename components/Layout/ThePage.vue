<script lang="ts" setup>
import type { Content } from "~/types/Content";

withDefaults(
  defineProps<
    Content & {
      showResmio?: boolean;
    }
  >(),
  {
    showResmio: true,
  },
);
</script>

<template>
  <div>
    <center-wrapper>
      <div class="page">
        <gallery-list v-if="gallery" class="gallery" :images="gallery" />
        <app-image
          v-else-if="image"
          :lazy="false"
          class="image"
          v-bind="image"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:1280px xxl:1280"
        />

        <div>
          <article class="body">
            <h1 id="content" tabindex="-1" v-html="title" />
            <post-date v-if="date" :date="date" />
            <div v-html="text" />
          </article>
          <slot />
        </div>

        <aside class="sidebar">
          <slot name="sidebar" />
          <resmio-widget v-if="showResmio" />
        </aside>
      </div>
    </center-wrapper>

    <arrangements-highlights-section />
  </div>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

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
