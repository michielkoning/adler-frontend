<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  items: {
    title: string
    link: RouteLocationRaw
  }[]
}>()

const popover = useTemplateRef('popover')

const close = () => {
  popover.value?.hidePopover()
}
</script>

<template>
  <ul
    ref="popover"
  >
    <li
      v-for="link in items"
      :key="link.title"
    >
      <nuxt-link
        aria-current-value="true"
        :to="link.link"
        @click="close"
      >
        <span v-html="link.title" />
      </nuxt-link>
    </li>
  </ul>
</template>

<style lang="css" scoped>
ul {
  @mixin list-reset;

  width: 100%;
  padding: 0 0 0 var(--spacing-4);
  position-area: bottom span-right;
  position-try-fallbacks: flip-inline;
  color: currentcolor;
  background: var(--color-white);
  border: 0;
  transition:
    opacity var(--transition),
    translate var(--transition),
    overlay var(--transition) allow-discrete,
    display var(--transition) allow-discrete;

  @media (--navigation-md) {
    width: auto;
    padding-left: 0;
    opacity: 0;
    filter: drop-shadow(0 0 0.1em rgb(0 0 0 / 20%));
    translate: 0 -1em;

    &:popover-open {
      opacity: 1;
      translate: 0;

      @starting-style {
        opacity: 0;
        translate: 0 -1em;
      }
    }
  }
}

li {
  border-top: 1px solid var(--color-gray);
}

a {
  @mixin link-reset;

  display: block;
  padding-block: var(--spacing-1);
  font-size: var(--font-size-l);
  border-left: 2px solid transparent;
  transition: border var(--transition);

  @media (--navigation-md) {
    padding-inline: var(--spacing-3);

    &:hover,
    &.router-link-active {
      color: var(--color-primary);
      border-left-color: currentcolor;
    }
  }
}
</style>
