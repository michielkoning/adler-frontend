<script lang="ts" setup>
import type { Archive } from '~/types/Archive'

defineProps<Archive>()
</script>

<template>
  <clickable-list-item
    :to="link"
    class="list-item"
  >
    <div class="link-wrapper">
      <nuxt-link
        :to="link"
        class="link"
      ><span v-html="title" /></nuxt-link>
    </div>
    <app-image
      v-if="image"
      v-bind="image"
      class="image"
      sizes="80px"
    />
  </clickable-list-item>
</template>

<style lang="css" scoped>
.link {
  @mixin link-reset;

  font-family: var(--font-family-headings);
  font-size: var(--font-size-l);
  font-weight: var(--font-weight-headings);
}

.list-item {
  display: grid;
  grid-template-columns: 5em auto;
  gap: var(--spacing-s);
  align-items: center;

  &:focus-within .link,
  &:hover .link {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-decoration-style: solid;
    text-decoration-color: var(--color-primary);
    text-underline-offset: 3px;
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
