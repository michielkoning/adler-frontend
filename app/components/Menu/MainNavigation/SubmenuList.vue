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

  padding: 0;
  position-area: bottom span-right;
  position-try-fallbacks: flip-inline;
  background: var(--color-background);
  border: 0;
  opacity: 0;
  filter: drop-shadow(0 0 0.1em rgb(0 0 0 / 20%));
  translate: 0 -1em;
  transition:
    opacity var(--transition),
    translate var(--transition),
    overlay var(--transition) allow-discrete,
    display var(--transition) allow-discrete;

  &:popover-open {
    opacity: 1;
    translate: 0;

    @starting-style {
      opacity: 0;
      translate: 0 -1em;
    }
  }
}

li:not(:last-child) {
  border-bottom: 1px solid var(--color-gray);
}

a {
  @mixin link-reset;

  display: block;
  padding: var(--spacing-1) var(--spacing-3);
  font-size: var(--font-size-l);
  border-left: 2px solid transparent;
  transition: border var(--transition);

  &:hover,
  &.router-link-active {
    color: var(--color-primary);
    border-left-color: currentcolor;
  }
}
</style>
