<template>
  <nav aria-labelledby="menu" :class="$style.nav">
    <h2 id="menu" class="sr-only" tabindex="-1">
      {{ $t('title') }}
    </h2>

    <div ref="menu">
      <main-navigation-container>
        <template v-slot="data">
          <ul :class="$style.menu">
            <main-navigation-item
              :title="$t(`pages.home`)"
              :url="localePath('/')"
            />
            <main-navigation-item
              :title="data.hotel.title"
              :url="data.hotel.relativeUrl"
              :children="data.hotel.childPages"
              :reset-submenu="menuIsOpen"
            />
            <main-navigation-item
              :title="$t(`pages.arrangements`)"
              :url="localePath({ name: 'arrangements' })"
              :children="data.arrangements"
              :reset-submenu="menuIsOpen"
            />
            <main-navigation-item
              :title="$t(`pages.rooms`)"
              :url="localePath({ name: 'rooms' })"
              :children="data.rooms"
              :reset-submenu="menuIsOpen"
            />
            <main-navigation-item
              :title="$t(`pages.blog`)"
              :url="localePath({ name: 'blog' })"
            />
            <main-navigation-item
              :title="$t(`pages.contact`)"
              :url="localePath({ name: 'contact' })"
            />
          </ul>

          <div
            :class="[$style.arrow, { [$style.active]: mounted }]"
            :style="{ transform: arrowPosition, width: arrowWidth }"
          />
        </template>
      </main-navigation-container>
    </div>
  </nav>
</template>

<script>
import MainNavigationItem from '~/components/Menu/MainNavigation/MainNavigationItem.vue'
import MainNavigationContainer from '~/components/Menu/MainNavigation/MainNavigationContainer.vue'

export default {
  components: {
    MainNavigationItem,
    MainNavigationContainer,
  },
  props: {
    menuIsOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      arrowPosition: 0,
      arrowWidth: 0,
      mounted: false,
    }
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.setArrowPosition()
      })
    },
  },
  mounted() {
    this.setArrowPosition()
    setTimeout(() => {
      this.mounted = true
    }, 0)
  },
  methods: {
    setArrowPosition() {
      const activeLink = this.getMainLink()

      if (activeLink) {
        this.arrowPosition = `translateX(${activeLink.parentElement.offsetLeft}px)`
        this.arrowWidth = `${activeLink.offsetWidth}px`
      } else {
        this.arrowWidth = 0
      }
    },
    getMainLink() {
      let activeLink = this.$refs.menu.querySelector(
        '.menu-link.nuxt-link-active[aria-haspopup=true], .menu-link.nuxt-link-exact-active',
      )
      if (activeLink) {
        return activeLink
      }
      const activeSubLink = this.$refs.menu.querySelector(
        '.submenu-link.nuxt-link-exact-active',
      )
      if (activeSubLink) {
        const menuItem = activeSubLink.closest('.menu-item.has-popup')
        activeLink = menuItem.querySelector('.menu-link')
        return activeLink
      }
      return null
    },
  },
}
</script>

<style lang="postcss" module>
.nav {
  position: relative;
  margin-bottom: var(--spacing-m);

  @media (--navigation-md) {
    margin-bottom: 0;
  }
}

.menu {
  @mixin list-reset;

  @media (--navigation-md) {
    display: flex;
    border-top: 0;
    justify-content: space-between;
  }

  @media (--navigation-lg) {
    margin-left: var(--spacing-l);
  }
}

.arrow {
  height: 3px;
  background: currentColor;
  display: none;

  @media (--navigation-md) {
    display: block;
  }

  &.active {
    transition: all 0.2s ease-out;
  }
}
</style>

<i18n>
{
  "nl": {
    "title": "Hoofdmenu"
  },
  "de": {
    "title": "Hauptmenü"
  },
  "en": {
    "title": "Main menu"
  }
}
</i18n>
