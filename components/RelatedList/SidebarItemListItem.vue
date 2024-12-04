<script lang="ts" setup>
import type { Archive } from '~/types/Archive';

defineProps<Archive>()
</script>

<template>
  <clickable-list-item :to="link" class="item">
    <div class="link-wrapper">
      <nuxt-link :to="link" class="link"><span v-html="title" /></nuxt-link>
    </div>
    <app-image v-bind="image" v-if="image" class="image" />
  </clickable-list-item>
</template>


<style lang="postcss" scoped>
.title {
  @mixin link-reset;

  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-headings);
  font-size: var(--font-size-l);

  &:hover {
    box-shadow: 0 2px 0 0 var(--color-primary);
  }
}

.item {
  display: grid;
  grid-template-columns: 5em auto;
  grid-gap: var(--spacing-s);
  align-items: center;

  &:focus-within,
  &:hover {
    & .title {
      box-shadow: 0 2px 0 0 var(--color-primary);
    }
  }
}

.image {
  grid-row-start: 1;
  height: 3em;
}

.link-wrapper {
  grid-column-start: 2;
}
</style>
