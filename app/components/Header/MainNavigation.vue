<script lang="ts" setup>
const { locale } = useI18n()

const { data } = await useFetch('/api/menu', {
  query: {
    locale,
  },
})
</script>

<template>
  <nav
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
  margin-block-end: var(--spacing-4);

  @media (--navigation-md) {
    margin-block-end: 0;
  }

  &::after {
    position: fixed;
    inset: auto anchor(inside) 0;
    display: none;
    block-size: 3px;
    position-anchor: --active-menu;
    pointer-events: none;
    content: "";
    background: var(--color-primary);
    transition: inset var(--transition);

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
