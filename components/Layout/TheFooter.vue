<template>
  <footer class="footer">
    <notch-wrapper>
      <div class="wrapper">
        <the-address />
        <opening-hours />
        <div class="quick-links">
          <nav v-if="menu" aria-label="footer-nav-heading" class="footer-menu">
            <h2 id="footer-nav-heading">{{ $t('usefulLinks') }}</h2>
            <ul v-if="menu.edges.length" class="menu">
              <li
                v-for="item in menu.edges[0].node.menuItems.edges"
                :key="item.node.label"
                class="menu-item"
              >
                <menu-item :item="item.node" />
              </li>
            </ul>
          </nav>
        </div>
        <social-media-links />
      </div>
    </notch-wrapper>
  </footer>
</template>

<script>
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import MenuItem from '~/components/Menu/MenuItem.vue'
import SocialMediaLinks from '~/components/Contact/SocialMediaLinks.vue'
import MenuQuery from '~/graphql/Menu.gql'
import TheAddress from '~/components/Contact/TheAddress.vue'
import OpeningHours from '~/components/Contact/OpeningHours.vue'

export default {
  components: {
    NotchWrapper,
    MenuItem,
    SocialMediaLinks,
    TheAddress,
    OpeningHours,
  },

  apollo: {
    menu: {
      query: MenuQuery,
      variables: {
        location: 'FOOTER_MENU',
      },
    },
  },
}
</script>

<style lang="postcss" scoped>
.footer {
  background: var(--color-3);
  color: var(--color-white);

  @mixin block-padding;
}

.wrapper {
  display: grid;
  grid-gap: var(--spacing-l) var(--gutter);
  align-items: start;
  justify-items: start;

  @media (--viewport-sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--viewport-md) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
