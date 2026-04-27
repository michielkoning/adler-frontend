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
        :key="item.id"
      >
        <app-image v-bind="item" />
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

  /* stylelint-disable-next-line selector-type-no-unknown */
  &::scroll-button(right),
  /* stylelint-disable-next-line selector-type-no-unknown */
  &::scroll-button(left) {
    position: absolute;
    top: 50%;
    width: 2em;
    aspect-ratio: 0.571;
    margin-top: calc(var(--spacing-l) * -1);
    cursor: pointer;
    content: "" / "Scroll right";
    background-color: currentcolor;
    /* stylelint-disable-next-line */
    clip-path: shape(from 3.66% 44.96%, curve by 0% 10.11% with -4.88% 2.79%/-4.88% 7.32%, line by 74.99% 42.84%, curve by 17.69% 0% with 4.88% 2.79%/12.81% 2.79%, smooth by 0% -10.11% with 4.88% -7.32%, line to 30.18% 50%, line to 96.3% 12.2%, curve by 0% -10.11% with 4.88% -2.79%/4.88% -7.32%, smooth by -17.69% 0% with -12.81% -2.79%, line by -74.99% 42.84%, close);

    &::after {
      display: block;
      content: "adsad";
    }
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  &::scroll-button(left) {
    left: 1em;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  &::scroll-button(right) {
    right: 1em;
    rotate: 180deg;
  }

  &::scroll-marker-group {
    position: absolute;
    inset: auto 0 var(--spacing-m);
    display: flex;
    gap: var(--spacing-xxs);
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

  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  &::scroll-marker:target-current {
    background: var(--color-primary);
  }
}
</style>
