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
  margin-bottom: var(--spacing-4);

  @media (--navigation-md) {
    margin-bottom: 0;
  }

  &::after {
    position: fixed;
    inset: auto anchor(inside) 0;
    display: none;
    height: 3px;
    position-anchor: --active-menu;
    content: "";
    background: var(--color-primary);
    transition: inset-inline var(--transition);

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

.menu-item-page {
  border-bottom: 2px solid var(--color-black);

  @media (--navigation-md) {
    border-bottom: 0;
  }

  &:has(.router-link-active) {
    &:deep(> a) {
      anchor-name: --active-menu;
    }
  }
}
</style>
