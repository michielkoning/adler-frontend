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
      :to="link"
    >
      {{ title }}
    </nuxt-link>
    <button
      v-if="children.length"
      :popovertarget="id"
      type="button"
    >
      <app-icon
        icon="fa-solid:chevron-down"
        class="icon"
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
      class="submenu"
      :items="children"
    />
  </li>
</template>

<style lang="css" scoped>
li {
  display: flex;
  gap: var(--spacing-xxs);
  align-items: center;
  anchor-name: v-bind(anchor);
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-headings);
}

a {
  @mixin link-reset;

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

.icon {
  width: var(--spacing-m);
  height: var(--spacing-m);
  aspect-ratio: 1;
  transition: transform var(--transition);
}

button {
  &[aria-expanded="true"] {
    .icon {
      transform: rotate(-180deg);

      @media (--navigation-md) {
        transform: rotate(0deg);
      }
    }
  }
}

.submenu {
  position-anchor: v-bind(anchor);
}
</style>
