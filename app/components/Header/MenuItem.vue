<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
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

const route = useRoute()

const isOpen = ref(false)

onMounted(() => {
  if (props.link === route.path) {
    isOpen.value = true
  }
  else {
    const hasActiveChild = props.children.some(item => item.link === route.path)
    if (hasActiveChild) {
      isOpen.value = true
    }
  }
})
</script>

<template>
  <li class="item">
    <nuxt-link
      class="link"
      :interestfor="id"
      :to="link"
    >
      {{ title }}
    </nuxt-link>
    <button
      v-if="children.length"
      type="button"
      :aria-expanded="isOpen"
      :aria-controls="id"
      @click="isOpen = !isOpen"
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
        v-for="link in children"
        :key="link.title"
        class="subitem"
      >
        <nuxt-link
          class="sublink"
          aria-current-value="true"
          :to="link.link"
        >
          <span v-html="link.title" />
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
  gap: var(--spacing-1);
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
    &:hover,
    &.router-link-active {
      color: var(--color-primary);
    }
  }
}

svg {
  width: var(--spacing-4);
  height: var(--spacing-4);
  aspect-ratio: 1;
  translate: 0 var(--spacing-1);
  transition: rotate var(--transition);
}

ul {
  @mixin list-reset;

  display: none;
  width: 100%;
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
    top: anchor(bottom);
    left: calc(anchor(left) - var(--gutter));
    width: auto;
    padding-left: 0;
    margin-inline: var(--gutter);
    position-anchor: v-bind(anchor);
    background-color: var(--color-white);
    filter: drop-shadow(0 0 0.1em rgb(0 0 0 / 20%));
    translate: 0;
  }
}

button[aria-expanded="true"] + ul {
  display: block;
  opacity: 1;
  translate: 0 0;

  @starting-style {
    opacity: 0;
    translate: 0 -1em;
  }

  @media (--navigation-md) {
    display: none;
    opacity: 0;
    translate: 0 -1em;
  }
}

@media (--navigation-md) {
  .item:hover ul {
    display: block;
    opacity: 1;
    translate: 0 0;

    @starting-style {
      opacity: 0;
      translate: 0 -1em;
    }
  }
}

.item:hover,
button[aria-expanded="true"] {
  svg {
    rotate: -180deg;
  }
}

.subitem {
  border-top: 1px solid var(--color-gray);
}

.sublink {
  padding-block: var(--spacing-1);
  font-size: var(--font-size-l);
  color: currentcolor;
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
