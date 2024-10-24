<script lang="ts" setup>
import { Archive } from '~/types/Archive';

defineProps<Archive>()
</script>

<template>
  <clickable-list-item :to="link" class="item">
   <div class="content">
      <h2 class="title">
        <nuxt-link :to="link" class="link" v-html="title" />
      </h2>
      <post-date v-if="date" :date="date" />
      <div v-html="text" />
      <read-more class="read-more" />
    </div>
    <app-image v-bind="image" v-if="image" class="image" />
    <price-badge
      v-if="price"
      :price="price"
      class="price-badge"
    />
  </clickable-list-item>
</template>

<style lang="postcss" scoped>
@import '~/assets/css/media-queries/media-queries.css';

.link {
  @mixin link-reset;
}

.item {
  display: grid;
  grid-gap: var(--spacing-s);
  position: relative;
  grid-row: 1 / 2;
  padding: calc(var(--gutter) / 2);
  margin-bottom: var(--spacing-s);

  @media (--viewport-sm) {
    grid-template-columns: 15em auto;
  }

  &:focus-within,
  &:hover {
    & .link {
      box-shadow: 0 2px 0 0 var(--color-primary);
    }
  }

  &:nth-child(2n) {
    background: var(--color-gray-light);
  }
}

.content {
  grid-row-start: 2;

  @media (--viewport-sm) {
    grid-column-start: 2;
    grid-row-start: 1;
  }
}

.image {
  height: 8em;
}

.price-badge {
  top: calc(var(--spacing-xs) * -1);
  right: calc(var(--spacing-xxs) * -1);
  position: absolute;

  @media (--viewport-sm) {
    top: 0;
    left: calc(var(--spacing-xxs) * -1);
  }
}

.read-more {
  flex: 0 0 auto;
}
</style>
