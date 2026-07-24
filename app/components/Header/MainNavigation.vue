<script lang="ts" setup>
const { locale } = useI18n()

const { data } = await useFetch('/api/menu', {
  query: {
    locale,
  },
})
const menuIsOpen = useMenuIsOpen()

const route = useRoute()

const {
  setActiveMenuItem,
} = useMenu()

watch(menuIsOpen, (value) => {
  if (!data.value) {
    return
  }
  if (value) {
    const mainItem = data.value.find(item => item.link === route.path)
    if (mainItem) {
      setActiveMenuItem(mainItem.title)
    }
    else {
      const mainItem = data.value.find((item) => {
        return item.children.some(subItem => subItem.link === route.path)
      })
      if (mainItem) {
        setActiveMenuItem(mainItem.title)
      }
    }
  }
  else {
    setActiveMenuItem()
  }
}, {
  immediate: true,
})
</script>

<template>
  <nav
    id="menu"
    aria-labelledby="menu"
  >
    <h2
      class="sr-only"
    >
      {{ "title" }}
    </h2>
    <div>
      <ul>
        <menu-item
          :id="1"
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
          :id="2"
          :title="$t('pages.contact')"
          class="menu-item-page"

          :link="$localeRoute({
            name: 'contact',
          })"
        />
        <menu-item
          :id="3"
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
  margin-block-end: var(--spacing-4);

  @media (--navigation-md) {
    margin-block-end: 0;
  }

  &::after {
    position: fixed;
    inset-block-end: anchor(bottom);
    inset-inline-start: anchor(left);
    display: none;
    inline-size: anchor-size(inline);
    block-size: 3px;
    position-anchor: --active-menu;
    pointer-events: none;
    content: "";
    background: var(--color-primary);
    transition:
      left var(--transition),
      width var(--transition);

    @media (--navigation-md) {
      display: block;
    }
  }
}

ul {
  @mixin list-reset;

  border-block-start: 2px solid var(--color-black);

  @media (--navigation-md) {
    display: flex;
    gap: var(--spacing-1);
    justify-content: space-between;
    border-block-start: 0;
  }
}

.menu-item-page {
  border-block-end: 2px solid var(--color-black);

  @media (--navigation-md) {
    border-block-end: 0;
  }

  &:has(.router-link-active) {
    &:deep(> a) {
      anchor-name: --active-menu;
    }
  }
}
</style>
