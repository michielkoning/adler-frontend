<script lang="ts" setup>
import type { Archive } from '~~/shared/types/Archive'

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
  .link {
    @mixin link-reset;
  }

  .item {
    position: relative;
    display: grid;
    grid-row: 1 / 2;
    gap: var(--spacing-3);
    padding: calc(var(--gutter) / 2);
    margin-bottom: var(--spacing-3);

    @media (--sm) {
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

    @media (--sm) {
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
    top: calc(var(--spacing-2) * -1);
    right: calc(var(--spacing-1) * -1);

    @media (--sm) {
      top: 0;
      left: calc(var(--spacing-1) * -1);
    }
  }

  .read-more {
    flex: 0 0 auto;
  }
</style>
