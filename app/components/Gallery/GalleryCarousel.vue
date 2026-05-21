<script lang="ts" setup>
import type { Image } from '~~/shared/types/Image'

const props = defineProps<{
  images: Image[]
}>()

const totalImages = computed(() => props.images.length)
</script>

<template>
  <div class="wrapper">
    <ul>
      <li
        v-for="item in images"
        :id="`image-${item.id}`"
        :key="item.id"
      >
        {{ item.id }}
        <app-image
          v-bind="item"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  position: relative;
}

ul {
  @mixin list-reset;

  display: grid;
  grid-template-columns: repeat(v-bind(totalImages), 100%);
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-color: var(--color-primary) transparent;
  scrollbar-width: thin;
  scroll-marker-group: after;

  &::scroll-button(right),
  &::scroll-button(left) {
    position: absolute;
    top: 50%;
    width: 2em;
    aspect-ratio: 320 / 512;
    margin-top: calc(var(--spacing-8) * -1);
    color: green;
    cursor: pointer;
    content: "";
    background-color: transparent;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256L73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>');
    border: 0;
    transition: opacity var(--transition);
  }

  &::scroll-button(left) {
    left: 1em;
    rotate: 180deg;
  }

  &::scroll-button(right) {
    right: 1em;
  }

  &::scroll-button(left):disabled,
  &::scroll-button(right):disabled {
    opacity: 0.25;
  }

  &::scroll-marker-group {
    position: absolute;
    inset: auto 0 var(--spacing-4);
    display: flex;
    gap: var(--spacing-1);
    place-content: center;
  }
}

li {
  scroll-snap-align: center;

  &::scroll-marker {
    display: block;
    width: 0.5em;
    aspect-ratio: 1;
    content: "";
    background-color: var(--color-white);
    border: 2px solid var(--color-primary);
    border-radius: 50%;
  }

  &::scroll-marker:target-current {
    background: var(--color-primary);
  }
}
</style>
