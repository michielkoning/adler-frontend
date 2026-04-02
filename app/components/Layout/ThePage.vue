<script lang="ts" setup>
import type { Content } from '~/types/Content'

const props = withDefaults(
  defineProps<
    Content & {
      showResmio?: boolean
    }
  >(),
  {
    showResmio: true,
  },
)

const transitionName = computed(() => `image-${props.id}`)
</script>

<template>
  <div>
    <center-wrapper>
      <div class="page">
        <gallery-list
          v-if="gallery.length"
          :id="id"
          class="gallery"
          :images="gallery"
          :title="title"
        />
        <app-image
          v-else-if="image"
          :lazy="false"
          class="image"
          v-bind="image"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:1280px xxl:1280"
        />

        <div>
          <article class="body">
            <h1
              id="content"
              tabindex="-1"
              v-html="title"
            />
            <post-date
              v-if="date"
              :date="date"
            />
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

<style lang="css" scoped>
  @import "~/assets/css/media-queries/media-queries.css";

  .page {
    display: grid;
    gap: var(--gutter);
    align-items: start;
    padding-top: var(--spacing-m);
    margin-bottom: var(--spacing-xl);

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

  .image {
    height: 30vw;
    max-height: 20rem;
    view-transition-name: v-bind(transitionName);
  }

  .sidebar {
    display: grid;
    gap: var(--gutter);

    @media (--viewport-sm) {
      grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
    }
  }
</style>
