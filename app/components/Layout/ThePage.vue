<script lang="ts" setup>
import type { Content } from '~~/shared/types/Content'

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
          sizes="100vw xs:100vw sm:100vw md:100vw lg:100vw xl:1280px xxl:1280px"
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
  .page {
    display: grid;
    gap: var(--gutter);
    align-items: start;
    padding-block-start: var(--spacing-4);
    margin-block-end: var(--spacing-16);

    @media (--md) {
      padding-block-start: 0;
    }

    @media (--lg) {
      grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    }
  }

  .gallery,
  .image {
    grid-row: 1 / 2;

    @media (--lg) {
      grid-column: 1 / 3;
    }
  }

  .image {
    block-size: 30vw;
    max-block-size: 20rem;
    view-transition-name: v-bind(transitionName);
  }

  .sidebar {
    display: grid;
    gap: var(--gutter);

    @media (--sm) {
      grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
    }
  }
</style>
