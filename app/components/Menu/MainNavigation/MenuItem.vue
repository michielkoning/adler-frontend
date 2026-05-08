<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

withDefaults(
  defineProps<{
    title: string
    to: RouteLocationRaw
    children?: {
      title: string
      to: RouteLocationRaw
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
      :to="to"
      class="menu-link"
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
    <ul
      v-if="children.length"
      :id="id"
      popover="hint"
    >
      <li
        v-for="link in children"
        :key="link.title"
      >
        <nuxt-link
          :to="link.to"
          class="submenu-link"
        >
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
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

.menu-link {
  flex: 1 0 auto;
  font-size: var(--font-size-xl);
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

ul {
  @mixin list-reset;

  top: anchor(bottom);
  left: anchor(left);
  position-anchor: v-bind(anchor);
  background: var(--color-background);
  border: 0;
  filter: drop-shadow(0 0 0.1em rgb(0 0 0 / 20%));
}

.submenu-link,
.menu-link {
  @mixin link-reset;

  display: block;
  padding-block: var(--spacing-xxs);
  transition: border var(--animation);
}

.submenu-link {
  padding-inline: var(--spacing-s);
  font-size: var(--font-size-l);
}

.submenu {
  @mixin list-reset;

  padding-left: var(--spacing-m);
  border-bottom: 2px solid var(--color-black);

  @media (--navigation-md) {
    position: absolute;
    top: 100%;
    left: calc(-1 * var(--spacing-xs));
    z-index: var(--z-main-navigation);
    padding-left: 0;
    white-space: nowrap;
    background: var(--color-background);
    border-bottom: 0;
    filter: drop-shadow(0 0 0.1em rgb(0 0 0 / 20%));
  }
}

a:hover,
li:has(.router-link-active) .menu-link,
li:has(a:hover) .menu-link,
.router-link-active {
  color: var(--color-primary);
}
</style>
