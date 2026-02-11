<script lang="ts" setup>
const { locale } = useI18n()
const localePath = useLocalePath()

const menu: Ref<HTMLAnchorElement | null> = ref(null)
const arrowPosition: Ref<string | undefined> = ref(undefined)
const arrowWidth = ref(`0`)

const { data } = useFetch('/api/menu', {
  query: {
    locale,
  },
})

let observer: ResizeObserver | undefined

const router = useRouter()
router.afterEach(() => {
  nextTick(() => {
    setArrowPosition()
  })
})

const updateArrowAfterResize = () => {
  setArrowPosition()
}

const getMainLink = () => {
  if (!menu.value) {
    return null
  }

  const activeLink: HTMLAnchorElement | null = menu.value.querySelector(
    '.router-link-active',
  )
  if (!activeLink) {
    return null
  }

  const parent: HTMLLIElement | null = activeLink.closest('.menu-item-page')
  if (!parent) {
    return null
  }
  return parent
}

const setArrowPosition = () => {
  if (!menu.value) {
    return
  }
  const activeLink = getMainLink()
  if (!activeLink) {
    arrowWidth.value = '0'
    return
  }
  const title: HTMLSpanElement | null = activeLink.querySelector('.title')
  if (!title) {
    arrowWidth.value = '0'
    return
  }
  arrowPosition.value = `translateX(${activeLink.offsetLeft}px)`
  arrowWidth.value = `${title.offsetWidth}px`
}

onMounted(() => {
  setArrowPosition()

  observer = new ResizeObserver((entries) => {
    if (entries.length) {
      updateArrowAfterResize()
    }
  })

  if (menu.value) {
    observer.observe(menu.value)
  }
})

onBeforeUnmount(() => {
  if (menu.value) {
    observer?.unobserve(menu.value)
  }
})
</script>

<template>
  <nav
    ref="menu"
    aria-labelledby="menu"
    class="nav"
  >
  
    <h2
      id="menu"
      class="sr-only"
      tabindex="-1"
    >
      {{ "title" }}
    </h2>
    <div v-if="data">
      <ul
        v-if="data"
        class="menu"
      >
        <menu-item
          :id="1"
          class="menu-item-page"
          :title="$t('pages.home')"
          :link="localePath('index')"
        />
        <menu-item
          v-for="item in data"
          v-bind="item"
          :key="item.id"
          class="menu-item-page"
        />
        <menu-item
          :id="3"
          class="menu-item-page"
          :title="$t('pages.contact')"
          :link="localePath('contact')"
        />
        <menu-item
          :id="2"
          class="menu-item-page"
          :title="$t('pages.lastMinutes')"
          :link="localePath('last-minutes')"
        />
      </ul>
      <div
        v-if="arrowPosition"
        :style="{ transform: arrowPosition, width: arrowWidth }"
        class="arrow"
      />
    </div>
  </nav>
</template>

<style lang="css" scoped>
  @import "~/assets/css/media-queries/media-queries.css";

  .nav {
    position: relative;
    margin-bottom: var(--spacing-m);

    @media (--show-full-navigation) {
      margin-bottom: 0;
    }
  }

  .menu {
    @mixin list-reset;

    border-top: 2px solid var(--color-black);

    @media (--show-full-navigation) {
      display: flex;
      gap: var(--spacing-s);
      justify-content: space-between;
      border-top: 0;
    }

    @media (--navigation-lg) {
      margin-left: var(--spacing-l);
    }
  }

  .arrow {
    position: absolute;
    bottom: 0;
    display: none;
    height: 3px;
    background: var(--color-primary);
    transition: all var(--transition);

    @media (--show-full-navigation) {
      display: block;
    }
  }
</style>
