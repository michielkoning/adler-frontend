<script lang="ts" setup>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const { title } = useAppConfig()

const menuIsOpen = useMenuIsOpen()

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

<style lang="css" scoped>
  @import "~/assets/css/media-queries/media-queries.css";

  .header {
    margin-bottom: var(--menu-height);
    background: var(--color-primary);

    @media (--navigation-md) {
      margin: 0;
      background: transparent;
    }
  }

  .background {
    position: fixed;
    inset: 0;
    z-index: var(--z-main-navigation);
    padding: var(--notch-top) var(--notch-right) 0 var(--notch-left);
    overflow: hidden;
    background: var(--color-background);

    @media (--navigation-md) {
      position: static;
      display: block !important;
      height: auto;
      padding: 0;
      overflow: visible;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    padding: 5em var(--gutter) var(--gutter);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    @media (--navigation-md) {
      display: grid !important;
      flex: 0 0 auto;
      grid-template-columns: auto 1fr;
      column-gap: var(--gutter);
      align-items: end;
      width: 100%;
      max-height: none;
      padding: 0;
      overflow: visible;
      transform: none;
    }
  }

  .logo-wrapper {
    @mixin link-reset;

    display: none;

    @media (--navigation-md) {
      display: block;
      width: 5em;
      margin-top: var(--spacing-xs);
    }

    @media (--navigation-lg) {
      grid-row: span 2;
      width: 7em;
      margin-bottom: var(--spacing-s);
    }
  }

  .logo {
    display: block;
    width: 100%;
    height: auto;
  }

  .meta-navigation {
    place-self: start end;
  }

  .main-navigation {
    order: -1;

    @media (--navigation-md) {
      grid-column: span 2;
      align-self: end;
      order: 1;
    }

    @media (--navigation-lg) {
      grid-column: span 1;
    }
  }

  .image {
    display: block;
    width: 100%;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: translate 0.3s;

    .content {
      transition: 0.3s 0.2s;
      transition-property: translate, opacity;
    }
  }

  .slide-enter-from,
  .slide-leave-to {
    translate: 0 -100vh;

    .content {
      opacity: 0;
      translate: 0 -2em;
    }
  }
</style>
