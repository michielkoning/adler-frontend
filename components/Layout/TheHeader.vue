<template>
  <header :class="$style.header">
    <notch-wrapper>
      <div :class="$style.wrapper">
        <skip-links />
        <mobile-navigation @toggleMenu="toggleMenu" />
        <nuxt-link
          :class="$style['logo-wrapper']"
          :to="localePath({ name: 'index' })"
        >
          <icon-logo
            :class="$style.logo"
            aria-hidden="true"
            width="120"
            height="120"
          />
          <span class="sr-only">{{ title }}</span>
        </nuxt-link>

        <transition
          name="fade2"
          @after-enter="afterEnter"
          @after-leave="afterLeave"
        >
          <div v-show="showMenu" :class="$style.background">
            <transition name="fade">
              <div v-show="showMenu" ref="content" :class="$style.content">
                <meta-navigation />
                <main-navigation
                  :class="$style['main-navigation']"
                  :menu-is-open="showMenu"
                />
              </div>
            </transition>
          </div>
        </transition>
      </div>
    </notch-wrapper>
  </header>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import IconLogo from '~/icons/logo.svg'
import SkipLinks from '~/components/Layout/SkipLinks.vue'
import MobileNavigation from '~/components/Menu/MobileNavigation.vue'
import MainNavigation from '~/components/Menu/MainNavigation/MainNavigation.vue'
import MetaNavigation from '~/components/Menu/MetaNavigation.vue'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import { title } from '~/data/siteDetails'

export default {
  components: {
    SkipLinks,
    MobileNavigation,
    IconLogo,
    MainNavigation,
    MetaNavigation,
    NotchWrapper,
  },
  data() {
    return {
      showMenu: false,
      title,
    }
  },
  methods: {
    toggleMenu(status) {
      this.showMenu = status
    },
    afterEnter() {
      this.lockBodyScoll(true)
    },
    afterLeave() {
      this.lockBodyScoll(false)
    },
    lockBodyScoll(isOpen) {
      const { content } = this.$refs
      if (isOpen) {
        disableBodyScroll(content)
      } else {
        enableBodyScroll(content)
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s 0.2s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(-2em);
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: transform 0.3s;
}

.fade2-enter,
.fade2-leave-to {
  transform: translateY(-100vh);
}
</style>

<style lang="postcss" module>
.header {
  background: var(--color-primary);
  margin-bottom: 4em;

  /* prettier-ignore */
  @media (--navigation-md) {
    background:
      linear-gradient(
        var(--color-primary) 0,
        var(--color-primary) 4em,
        transparent 4em,
        transparent 100%
      );
    margin-bottom: 0;
  }

  @media (--navigation-lg) {
    background: transparent;
  }
}

.wrapper {
  @media (--navigation-md) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }

  @media (--navigation-lg) {
    flex-direction: row;
  }
}

.content {
  padding: 5em var(--gutter) var(--gutter);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (--navigation-md) {
    padding: 0;
    flex-direction: column;
    overflow: visible;
    transform: none;
    display: flex !important;
    align-items: flex-end;
    max-height: none;
    justify-content: space-between;
    flex: 1 0 auto;
  }

  @media (--navigation-lg) {
    padding-left: 0;
  }
}

.logo-wrapper {
  @mixin link-reset;

  align-self: center;
  flex: 1 0 auto;
  position: relative;
  z-index: var(--z-header);
  width: 100%;

  @media (--navigation-lg) {
    width: auto;
    flex: 0 0 auto;
  }
}

.main-navigation {
  width: 100%;
  order: -1;

  @media (--navigation-md) {
    order: 1;
  }
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  overflow: hidden;
  z-index: var(--z-main-navigation);
  padding: 0 env(safe-area-inset-right) 0 env(safe-area-inset-left);
  background: var(--color-bg-page);

  @media (--navigation-md) {
    flex: 1 1 auto;
    height: auto;
    position: static;
    padding: 0;
    overflow: visible;
    display: flex !important;
  }
}

.logo,
.logo-small {
  fill: var(--color-primary);
  display: none;
}

.logo {
  @media (--navigation-lg) {
    display: block;
  }
}

.logo-small {
  margin: var(--spacing-xs) auto;

  @media (--navigation-md) {
    display: block;
  }

  @media (--navigation-lg) {
    display: none;
  }
}
</style>
