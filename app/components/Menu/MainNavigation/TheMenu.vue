<script lang="ts" setup>
const { locale } = useI18n()
const localePath = useLocalePath()

const menu: Ref<HTMLAnchorElement | null> = ref(null)
const arrowPosition: Ref<string | undefined> = ref(undefined)
const arrowWidth = ref(`0`)

const { data } = await useFetch('/api/menu', {
  query: {
    locale,
  },
})
</script>

<template>
  <nav
    ref="menu"
    aria-labelledby="menu"
    class="nav"
  >
    {{ locale }}
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
        <nuxt-link
          v-for="item in data"
          v-bind="item"
          :key="item.id"
          :to="item.link"
          class="menu-item-page"
        >{{ item.title }}
        </nuxt-link>
      </ul>
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
