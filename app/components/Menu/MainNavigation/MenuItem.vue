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
      class="submenu"
      :items="children"
    />
  </li>
</template>

<style lang="css" scoped>
a {
  @mixin link-reset;

  interest-delay: 0s 0.25s;
  display: block;
  flex: 1 0 auto;
  padding-block: var(--spacing-xxs);
  font-size: var(--font-size-xl);
  transition: border var(--animation);

  &:hover,
  &.router-link-active {
    color: var(--color-primary);
  }
}

li {
  display: flex;
  gap: var(--spacing-xxs);
  align-items: center;
  anchor-name: v-bind(anchor);
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-headings);

  &:has(:popover-open) {
    transform: rotate(0deg);
  }

  &:has(.router-link-active) a {
    color: var(--color-primary);
  }
}

svg {
  width: var(--spacing-m);
  height: var(--spacing-m);
  aspect-ratio: 1;
  transition: transform var(--transition);
}

.submenu {
  position-anchor: v-bind(anchor);
}
</style>
