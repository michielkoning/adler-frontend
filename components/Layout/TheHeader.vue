<template>
  <header class="header">
    <skip-links />
    <mobile-navigation @toggle-menu="toggleMenu" />
    <center-wrapper :top="true">
      <transition
        name="slide"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
      >
        <div v-show="showMenu" class="background">
          <transition name="fade">
            <div v-show="showMenu" ref="content" class="content">
              <nuxt-link
                :class="['logo-wrapper']"
                :to="localePath({ name: 'index' })"
              >
                <icon-logo
                  class="logo"
                  aria-hidden="true"
                  width="497"
                  height="424"
                />
                <span class="sr-only">{{ title }}</span>
              </nuxt-link>
              <meta-navigation class="meta-navigation" />
              <main-navigation
                :class="['main-navigation']"
                :menu-is-open="showMenu"
              />
            </div>
          </transition>
        </div>
      </transition>
    </center-wrapper>
  </header>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import IconLogo from '~/icons/logo.svg'
import { title } from '~/data/siteDetails'

export default {
  components: {
    IconLogo,
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
@import '~/styles/media-queries/media-queries.css';

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s 0.2s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(-2em);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100vh);
}

.header {
  background: var(--color-primary);
  margin-bottom: var(--menu-height);

  @media (--navigation-md) {
    background: transparent;
    margin: 0;
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
  padding: var(--notch-top) var(--notch-right) 0 var(--notch-left);
  background: var(--color-background);

  @media (--navigation-md) {
    height: auto;
    position: static;
    padding: 0;
    overflow: visible;
    display: block !important;
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
    overflow: visible;
    transform: none;
    display: grid !important;
    grid-template-columns: auto 1fr;
    grid-column-gap: var(--gutter);
    max-height: none;
    align-items: end;
    flex: 0 0 auto;
    width: 100%;
  }
}

.logo-wrapper {
  @mixin link-reset;

  display: none;

  @media (--navigation-md) {
    display: block;
    margin-top: var(--spacing-xs);
    width: 5em;
  }

  @media (--navigation-lg) {
    grid-row: span 2;
    margin-bottom: var(--spacing-s);
    width: 7em;
  }
}

.meta-navigation {
  align-self: start;
  justify-self: end;
}

.main-navigation {
  order: -1;

  @media (--navigation-md) {
    grid-column: span 2;
    order: 1;
    align-self: end;
  }

  @media (--navigation-lg) {
    grid-column: span 1;
  }
}

.logo {
  width: 100%;
  height: auto;
  display: block;
}
</style>
