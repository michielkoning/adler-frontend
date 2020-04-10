<template>
  <nav aria-labelledby="menu-title" class="nav">
    <h2 id="menu-title" class="sr-only" tabindex="-1">
      {{ $t('mainNavigation') }}
    </h2>

    <ul ref="menu" class="menu">
      <main-navigation-item :title="$t(`home`)" :url="localePath('/')" />

      <main-navigation-item
        :title="menu.hotel.title"
        :url="menu.hotel.relativeUrl"
        :children="menu.hotel.childPages"
      />

      <main-navigation-item
        :title="$t(`arrangements`)"
        :url="localePath({ name: 'arrangements' })"
        :children="menu.arrangements"
      />
      <main-navigation-item
        :title="$t(`rooms`)"
        :url="localePath({ name: 'rooms' })"
        :children="menu.rooms"
      />
      <main-navigation-item
        :title="$t(`blog`)"
        :url="localePath({ name: 'blog' })"
      />
      <main-navigation-item
        :title="$t(`contact`)"
        :url="localePath({ name: 'contact' })"
      />
    </ul>

    <div
      :class="{ active: mounted }"
      :style="{ transform: arrowPosition, width: arrowWidth }"
      class="arrow"
    />
  </nav>
</template>

<script>
import MainNavigationItem from '~/components/Menu/MainNavigationItem.vue'
import MenuQuery from '~/graphql/Menu/Menu.gql'
import { hotelPageId } from '~/data/pages'

export default {
  components: {
    MainNavigationItem,
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
  apollo: {
    menu: {
      query: MenuQuery,
      variables() {
        return {
          language: this.$i18n.locale.toUpperCase(),
          hotelPageId: hotelPageId[this.$i18n.locale],
        }
      },
      update: (data) => {
        return {
          hotel: data.hotel,
          rooms: data.rooms,
          arrangements: data.arrangements,
        }
      },
    },
  },
}
</script>

<style lang="postcss" scoped>
.nav {
  position: relative;
  font-family: var(--font-family-header);
}

.menu {
  @mixin list-reset;

  border-bottom: 1px solid var(--color-black);

  @media (--navigation-md) {
    display: flex;
    border-bottom: 0;
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
