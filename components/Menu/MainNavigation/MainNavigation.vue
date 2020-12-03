<template>
  <nav aria-labelledby="menu" :class="$style.nav">
    <h2 id="menu" class="sr-only" tabindex="-1">
      {{ $t('title') }}
    </h2>
    <div ref="menu">
      <ul v-if="menu" :class="$style.menu">
        <main-navigation-item
          :title="$t('pages.home')"
          :uri="localePath('/')"
        />
        <main-navigation-item
          :title="menu.hotel.title"
          :uri="menu.hotel.uri"
          :children="menu.hotelPageChildren"
          :reset-submenu="menuIsOpen"
        />
        <main-navigation-item
          :title="menu.environment.title"
          :uri="menu.environment.uri"
          :children="menu.environmentPageChildren"
          :reset-submenu="menuIsOpen"
        />
        <main-navigation-item
          :title="$t('pages.arrangements')"
          :uri="localePath({ name: 'arrangements' })"
          :children="menu.arrangements"
          :reset-submenu="menuIsOpen"
        />
        <main-navigation-item
          :title="$t('pages.rooms')"
          :uri="localePath({ name: 'rooms' })"
          :children="menu.rooms"
          :reset-submenu="menuIsOpen"
        />
        <main-navigation-item
          :title="$t('pages.contact')"
          :uri="localePath({ name: 'contact' })"
        />
        <template v-if="menu.menuItems.edges">
          <main-navigation-item
            v-for="menuItem in menu.menuItems.edges"
            :key="menuItem.node.id"
            :title="menuItem.node.title"
            :uri="menuItem.node.uri"
          />
        </template>
      </ul>
      <div
        :class="[$style.arrow, { [$style.active]: mounted }]"
        :style="{ transform: arrowPosition, width: arrowWidth }"
      />
    </div>
  </nav>
</template>

<script>
import { debounce } from 'throttle-debounce'

export default {
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
  computed: {
    menu() {
      return this.$store.getters['menu/getByLanguage'](this.$i18n.locale)
    },
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
    window.addEventListener('resize', this.updateArrowAfterResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.updateArrowAfterResize)
  },
  methods: {
    updateArrowAfterResize() {
      debounce(500, this.setArrowPosition())
    },
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
  background: var(--color-primary);
  display: none;
  position: absolute;
  bottom: 0;

  @media (--navigation-md) {
    display: block;
  }

  &.active {
    transition: all var(--animation);
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
