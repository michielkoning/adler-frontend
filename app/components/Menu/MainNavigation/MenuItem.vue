<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title: string
    id: number
    link: string
    children?: {
      title: string
      id: number
      link: string
    }[]
  }>(),
  {
    children: () => [],
  },
)

const { clear, openMenus, add, remove } = useLayout()
const menuIsOpen = useMenuIsOpen()
let timer = null as number | null
const linkRef = ref<ComponentPublicInstance<HTMLAnchorElement> | null>(null)

const isOpen = computed(() => openMenus.value.includes(props.title))

const toggleMenu = () => {
  if (isOpen.value) {
    remove(props.title)
  }
  else {
    add(props.title)
  }
}

const setActiveSubmenu = () => {
  if (!isSmallScreen()) return
  if (!linkRef.value) return
  if (!linkRef.value.$el.classList.contains('nuxt-link-active')) {
    return
  }
  add(props.title)
}

watch(menuIsOpen, () => {
  if (menuIsOpen.value) {
    setActiveSubmenu()
  }
})

const hasChildren = computed(() => {
  return props.children?.length ? true : false
})

const mouseover = () => {
  if (isSmallScreen()) return
  if (!hasChildren.value) return
  if (!timer) return
  add(props.title)
  clearTimeout(timer)
}

const mouseout = () => {
  if (isSmallScreen()) return
  timer = window.setTimeout(() => {
    remove(props.title)
  }, 150)
}
const isSmallScreen = () => {
  return window.innerWidth < 768
}

const controlId = `menu-${props.id}`
</script>

<template>
  <li
    class="menu-item"
    @mouseover="mouseover"
    @mouseout="mouseout"
  >
    <nuxt-link
      ref="linkRef"
      :to="link"
      :aria-haspopup="children.length > 0"
      class="menu-link"
      @click="clear"
    >
      <span
        class="title"
        v-html="title"
      />
    </nuxt-link>
    <template v-if="children.length">
      <button
        :aria-expanded="isOpen"
        :aria-controls="controlId"
        class="btn-show-submenu"
        @click="toggleMenu"
      >
        <app-icon
          icon="fa-solid:chevron-down"
          aria-hidden="true"
          class="icon"
        />
        <span class="sr-only">
          {{
            $t("showSubmenuFor", {
              title: title,
            })
          }}
        </span>
      </button>

      <slide-in-animation>
        <ul
          v-if="isOpen"
          :id="controlId"
          class="submenu"
        >
          <li
            v-for="subItem in children"
            :key="subItem.id"
            class="submenu-item"
          >
            <nuxt-link
              :to="subItem.link"
              class="submenu-link"
              @click="clear"
            >
              <span v-html="subItem.title" />
            </nuxt-link>
          </li>
        </ul>
      </slide-in-animation>
    </template>
  </li>
</template>

<style lang="css" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.menu-item {
  position: relative;
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-headings);

  @media (--navigation-md) {
    display: flex;
    gap: var(--spacing-xs);
    align-items: center;
  }
}

.menu-link {
  font-size: var(--font-size-xl);
  border-bottom: 2px solid var(--color-black);

  @media (--navigation-md) {
    border-bottom-width: 0;
  }
}

.submenu-item:not(:last-child) {
  border-bottom: 1px solid var(--color-black);
}

.icon {
  transition: transform var(--transition);
}

.btn-show-submenu {
  position: absolute;
  top: 0.75em;
  right: calc(var(--spacing-xs) * -1);
  display: block;
  width: var(--spacing-l);
  height: var(--spacing-l);

  @media (--navigation-md) {
    position: relative;
    top: auto;
    right: auto;
    transform: translateY(-2px);
  }

  &[aria-expanded="true"] {
    .icon {
      transform: rotate(-180deg);

      @media (--navigation-md) {
        transform: rotate(0deg);
      }
    }
  }
}

.submenu-link,
.menu-link {
  @mixin link-reset;

  display: block;
  padding-block: var(--spacing-xs);
  transition: border var(--animation);
}

.submenu-link {
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
</style>
