<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

withDefaults(
  defineProps<{
    title: string
    link: RouteLocationRaw
    children?: {
      title: string
      link: RouteLocationRaw
    }[]
  }>(),
  {
    children: () => [],
  },
)

const id = useId()

const anchor = computed(() => {
  return `--${id}`
})
</script>

<template>
  <li>
    <nuxt-link
      :interestfor="id"
      :to="link"
    >
      {{ title }}
    </nuxt-link>
    <button
      v-if="children.length"
      :popovertarget="id"
    >
      <app-icon
        icon="fa-solid:chevron-down"
      />
      <span class="sr-only">
        {{
          $t("showSubmenuFor", {
            title,
          })
        }}
      </span>
    </button>
    <submenu-list
      v-if="children.length"
      :id="id"
      ref="popover"
      popover="hint"
      :items="children"
    />
  </li>
</template>

<style lang="css" scoped>
a {
  @mixin link-reset;

  interest-delay: 0s 0.25s;
  display: block;
  padding-block: var(--spacing-1);
  font-size: var(--font-size-xl);

  &:hover,
  &.router-link-active {
    color: var(--color-primary);
  }
}

li {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-1);
  align-items: center;
  justify-content: space-between;
  anchor-name: v-bind(anchor);
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-headings);

  @media (--navigation-lg) {
    &:has(.router-link-active) a {
      color: var(--color-primary);
    }
  }
}

svg {
  width: var(--spacing-4);
  height: var(--spacing-4);
  aspect-ratio: 1;
  translate: 0 var(--spacing-1);
  transition: transform var(--transition);
}

[popover] {
  position-anchor: v-bind(anchor);
}
</style>
