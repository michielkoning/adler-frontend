<script lang="ts" setup>
const { locale } = useI18n()

const menu = useTemplateRef('menu')

const { data } = await useFetch('/api/menu', {
  query: {
    locale,
  },
})

const route = useRoute()

const arrowWidth = ref('0px')
const arrowOffsetLeft = ref('0px')
const arrowTransitionDuration = ref('0s')

const observer: Ref<ResizeObserver | undefined> = ref(undefined)

const updateArrow = async () => {
  if (!menu.value) {
    return
  }

  await nextTick()
  const activeMenu = menu.value.querySelector<HTMLAnchorElement>('.menu-item-page:has(.router-link-active) > a')
  if (!activeMenu) {
    return
  }
  arrowWidth.value = `${activeMenu.offsetWidth}px`
  arrowOffsetLeft.value = `${activeMenu.offsetLeft}px`

  setTimeout(() => {
    arrowTransitionDuration.value = 'var(--transition-duration)'
  }, 200)
}

onMounted(() => {
  watch(() => route.path, () => {
    updateArrow()
  }, {
    immediate: true,
  })

  if (menu.value) {
    observer.value = new ResizeObserver(
      () => {
        arrowTransitionDuration.value = '0s'
        updateArrow()
      },
    )

    if (observer.value) {
      observer.value.observe(menu.value)
    }
  }
})

onUnmounted(() => {
  if (menu.value && observer.value) {
    observer.value.unobserve(menu.value)
  }
})
</script>

<template>
  <nav
    ref="menu"
    aria-labelledby="menu"
  >
    <h2
      id="menu"
      class="sr-only"
      tabindex="-1"
    >
      {{ "title" }}
    </h2>
    <div>
      <ul>
        <menu-item
          :title="$t('pages.home')"
          class="menu-item-page"
          :link="$localeRoute({
            name: 'index',
          })"
        />
        <menu-item
          v-for="item in data"
          :key="item.id"
          v-bind="item"
          class="menu-item-page"
        />
        <menu-item
          :title="$t('pages.contact')"
          class="menu-item-page"
          :link="$localeRoute({
            name: 'contact',
          })"
        />
        <menu-item
          :title="$t('pages.lastMinutes')"
          class="menu-item-page"
          :link="$localeRoute({
            name: 'last-minutes',
          })"
        />
      </ul>
    </div>
  </nav>
</template>

<style lang="css" scoped>
  nav {
    position: relative;
    margin-bottom: var(--spacing-4);

    @media (--navigation-md) {
      margin-bottom: 0;
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      display: none;
      width: v-bind(arrowWidth);
      height: 3px;
      content: "";
      background: var(--color-primary);
      translate: v-bind(arrowOffsetLeft) 0;
      transition: translate var(--transition-timing-function);
      transition-duration: v-bind(arrowTransitionDuration);

      @media (--navigation-md) {
        display: block;
      }
    }
  }

  ul {
    @mixin list-reset;

    border-top: 2px solid var(--color-black);

    @media (--navigation-md) {
      display: flex;
      gap: var(--spacing-1);
      justify-content: space-between;
      border-top: 0;
    }
  }
</style>
