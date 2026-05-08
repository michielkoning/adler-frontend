<script lang="ts" setup>
const { locale } = useI18n()
// const localePath = useLocalePath()

const menu: Ref<HTMLAnchorElement | null> = ref(null)
// const arrowPosition: Ref<string | undefined> = ref(undefined)
// const arrowWidth = ref(`0`)

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
          :to="{
            name: 'index',
          }"
          :children="[
            {
              title: 'test',
              to: {
                name: 'index',
              },
            },
          ]"
        />
        <li
          v-for="item in data"
          :key="item.id"
        >
          <nuxt-link
            v-bind="item"
            :to="item.link"
            class="menu-item-page"
          >
            {{ item.title }}
          </nuxt-link>
        </li>

        <menu-item
          :title="$t('pages.contact')"
          class="menu-item-page"
          :to="$localeRoute({
            name: 'contact',
          })"
        />
        <menu-item
          :title="$t('pages.lastMinutes')"
          class="menu-item-page"
          :to="$localeRoute({
            name: 'last-minutes',
          })"
        />
      </ul>
    </div>
  </nav>
</template>

<style lang="css" scoped>
  .nav {
    position: relative;
    margin-bottom: var(--spacing-m);

    @media (--show-full-navigation) {
      margin-bottom: 0;
    }
  }

  ul {
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
