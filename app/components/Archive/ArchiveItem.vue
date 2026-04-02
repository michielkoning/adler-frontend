<script lang="ts" setup>
import type { Archive } from '~/types/Archive'

const props = defineProps<Archive>()
const transitionName = computed(() => `image-${props.id}`)
</script>

<template>
  <clickable-list-item
    :to="link"
    class="item"
  >
    <div class="content">
      <h2 class="title">
        <nuxt-link
          :to="link"
          class="link"
        ><span v-html="title" /></nuxt-link>
      </h2>
      <post-date
        v-if="date"
        :date="date"
      />
      <div v-html="text" />
      <read-more class="read-more" />
    </div>
    <app-image
      v-if="image"
      v-bind="image"
      class="image"
      sizes="100vw sm:240px"
    />
    <price-badge
      v-if="price"
      :price="price"
      class="price-badge"
    />
  </clickable-list-item>
</template>

<style lang="css" scoped>
  @import "~/assets/css/media-queries/media-queries.css";

  .link {
    @mixin link-reset;
  }

  .item {
    position: relative;
    display: grid;
    grid-row: 1 / 2;
    gap: var(--spacing-s);
    padding: calc(var(--gutter) / 2);
    margin-bottom: var(--spacing-s);

    @media (--viewport-sm) {
      grid-template-columns: 15em auto;
    }

    &:focus-within,
    &:hover {
      & .link {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-decoration-style: solid;
        text-decoration-color: var(--color-primary);
        text-underline-offset: 3px;
      }
    }

    &:nth-child(2n) {
      background: var(--color-gray-light);
    }
  }

  .content {
    grid-row-start: 2;

    @media (--viewport-sm) {
      grid-row-start: 1;
      grid-column-start: 2;
    }
  }

  .image {
    height: 8em;
    view-transition-name: v-bind(transitionName);
  }

  .price-badge {
    position: absolute;
    top: calc(var(--spacing-xs) * -1);
    right: calc(var(--spacing-xxs) * -1);

    @media (--viewport-sm) {
      top: 0;
      left: calc(var(--spacing-xxs) * -1);
    }
  }

  .read-more {
    flex: 0 0 auto;
  }
</style>
