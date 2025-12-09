<script lang="ts" setup>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const { title } = useAppConfig()

const menuIsOpen = useMenu()

const content: Ref<HTMLDivElement | null> = ref(null)

const afterEnter = () => {
  lockBodyScoll(true)
}

const afterLeave = () => {
  lockBodyScoll(false)
}
const lockBodyScoll = (isOpen: boolean) => {
  if (!content.value) {
    return
  }
  if (isOpen) {
    disableBodyScroll(content.value)
  }
  else {
    enableBodyScroll(content.value)
  }
}
</script>

<template>
  <header class="header">
    <mobile-navigation />
    <center-wrapper>
      <transition
        name="slide"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
      >
        <div
          v-show="menuIsOpen"
          class="background"
        >
          <div class="content">
            <div class="logo-wrapper">
              <nuxt-link-locale
                class="logo"
                :to="{ name: 'index' }"
              >
                <app-icon
                  icon="adler:logo"
                  class="image"
                  aria-hidden="true"
                  width="100"
                />
                <span class="sr-only">{{ title }}</span>
              </nuxt-link-locale>
            </div>
            <meta-navigation class="meta-navigation" />
            <the-menu class="main-navigation" />
          </div>
        </div>
      </transition>
    </center-wrapper>
  </header>
</template>

<style scoped>
  @import "~/assets/css/media-queries/media-queries.css";

  .slide-enter-active,
  .slide-leave-active {
    transition: translate 0.3s;

    .content {
      transition-property: translate, opacity;
      transition: 0.3s 0.2s;
    }
  }

  .slide-enter-from,
  .slide-leave-to {
    translate: 0 -100vh;

    .content {
      translate: 0 -2em;
      opacity: 0;
    }
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
    inset: 0;
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

  .logo {
    width: 100%;
    height: auto;
    display: block;
  }

  .meta-navigation {
    place-self: start end;
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

  .image {
    display: block;
    width: 100%;
  }
</style>
