<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    title: string
    link?: RouteLocationRaw
    children?: {
      title: string
      link?: RouteLocationRaw
    }[]
  }>(),
  {
    link: undefined,
    children: () => [],
  },
)

const id = useId()

const { fullNavigation } = useAppConfig()

const {
  addActiveMenuItem,
  isActiveMenuItem,
  removeActiveMenuItem,
  toggleActiveMenuItem,
  closeMobileMenu,
} = useMenu()

const anchor = computed(() => {
  return `--${id}`
})

let timer: NodeJS.Timeout | undefined

const onMouseover = () => {
  if (window.innerWidth < fullNavigation) return
  addActiveMenuItem(props.title)
  clearTimeout(timer)
}

const onMouseleave = () => {
  if (window.innerWidth < fullNavigation) return
  timer = setTimeout(() => {
    removeActiveMenuItem(props.title)
  }, 250)
}

const closeMenuItem = () => {
  if (window.innerWidth < fullNavigation) {
    closeMobileMenu()
  }
  else {
    removeActiveMenuItem(props.title)
  }
}
</script>

<template>
  <li
    class="item"
    @mouseover="onMouseover"
    @mouseleave="onMouseleave"
  >
    <nuxt-link
      class="link"
      :to="link"
      @click="closeMenuItem"
    >
      <span v-html="title" />
    </nuxt-link>
    <button
      v-if="children.length"
      type="button"
      :aria-expanded="isActiveMenuItem(title)"
      :aria-controls="id"
      @click="toggleActiveMenuItem(title)"
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

    <ul
      v-if="children.length"
      :id="id"
    >
      <li
        v-for="sublink in children"
        :key="sublink.title"
      >
        <nuxt-link
          class="sublink"
          aria-current-value="true"
          :to="sublink.link"
          @click="closeMenuItem"
        >
          <span v-html="sublink.title" />
        </nuxt-link>
      </li>
    </ul>
  </li>
</template>

<style lang="css" scoped>
.item {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  anchor-name: v-bind(anchor);
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-headings);

  @media (--navigation-md) {
    &:has(.router-link-active) .link {
      color: var(--color-primary);
    }

    &:hover {
      ul {
        display: block;
      }
    }
  }
}

a {
  @mixin link-reset;

  display: block;
}

.link {
  flex: 1 0 auto;
  padding-block: var(--spacing-1);
  font-size: var(--font-size-xl);

  @media (--navigation-md) {
    &:focus-visible,
    &:hover,
    &.router-link-active {
      color: var(--color-primary);
    }
  }
}

svg {
  inline-size: var(--spacing-4);
  aspect-ratio: 1;
  transition: rotate var(--transition);

  @media (--navigation-md) {
    translate: 0 0.25em;
  }
}

ul {
  @mixin list-reset;

  display: none;
  inline-size: 100%;
  padding-inline-start: var(--spacing-4);
  opacity: 0;
  translate: 0 -1em;
  transition:
    opacity var(--transition),
    translate var(--transition),
    overlay var(--transition) allow-discrete,
    display var(--transition) allow-discrete;

  @media (--navigation-md) {
    position: fixed;
    inset-block-start: anchor(bottom);
    inset-inline-start: calc(anchor(left) - var(--gutter));
    inline-size: auto;
    padding-inline-start: 0;
    margin-inline: var(--gutter);
    position-anchor: v-bind(anchor);
    pointer-events: none;
    background-color: var(--color-white);
    filter: drop-shadow(0 0 0.1em rgb(0 0 0 / 20%));
  }
}

button {
  display: flex;
  align-items: center;
  justify-content: end;
  inline-size: 2em;
  aspect-ratio: 1;

  @media (--navigation-md) {
    inline-size: 1.25em;
  }

  &[aria-expanded="true"] {
    svg {
      rotate: -180deg;

      @media (--navigation-md) {
        rotate: 0deg;
      }
    }

    + ul {
      display: block;
      pointer-events: auto;
      opacity: 1;
      translate: 0 0;

      @starting-style {
        opacity: 0;
        translate: 0 -1em;
      }
    }
  }
}

.sublink {
  padding-block: var(--spacing-1);
  font-size: var(--font-size-l);
  color: currentcolor;
  border-block-start: 1px solid var(--color-gray);
  border-inline-start: 2px solid transparent;
  transition: border var(--transition);

  @media (--navigation-md) {
    padding-inline: var(--spacing-2);

    &:hover,
    &:focus-visible,
    &.router-link-active {
      color: var(--color-primary);
      border-inline-start-color: currentcolor;
    }
  }
}
</style>
