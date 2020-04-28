<template>
  <div class="wrapper">
    <notch-wrapper>
      <div class="buttons">
        <nuxt-link class="logo-wrapper" to="/">
          <icon-logo class="logo" height="50" width="166" aria-hidden="true" />
          <span class="sr-only">{{ title }}</span>
        </nuxt-link>
        <button
          :aria-expanded="menuIsExpanded ? 'true' : 'false'"
          class="btn"
          @click="toggleMenu(!menuIsExpanded)"
        >
          <icon-bars aria-hidden="true" width="24" height="24" class="bars" />
          {{ $t('title') }}
        </button>
      </div>
    </notch-wrapper>
  </div>
</template>

<script>
import IconBars from '~/icons/bars.svg'
import IconLogo from '~/icons/logo.svg'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import { title } from '~/data/siteDetails'
import EventBusUtil from '~/utils/eventBusUtil'

export default {
  components: {
    IconBars,
    NotchWrapper,
    IconLogo,
  },
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuIsExpanded: false,
      title,
    }
  },
  mounted() {
    EventBusUtil.$on('header-close-mobile-menu', () => this.toggleMenu(false))
  },
  methods: {
    toggleMenu(status) {
      this.menuIsExpanded = status
      this.$emit('toggleMenu', status)
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  position: fixed;
  padding: var(--spacing-xs) 0;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-primary);
  z-index: var(--z-mobile-navigation);
  border-bottom: 1px solid var(--color-white);

  @media (--navigation-md) {
    display: none;
  }
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-wrapper {
  display: flex;
  align-items: center;
}

.btn {
  @mixin btn;

  color: var(--color-white);
  font-size: 0.8em;
  border-color: var(--color-white);
  display: flex;
  align-items: center;

  &[aria-expanded='true'] {
    background: var(--color-white);
    color: var(--color-primary);
  }
}

.bars {
  margin-right: var(--spacing-xxs);
  fill: currentColor;
}
</style>

<i18n>
{
  "nl": {
    "title": "Menu"
  },
  "de": {
    "title": "Menu"
  },
  "en": {
    "title": "Menu"
  }
}
</i18n>
