<script lang="ts" setup>
const menuIsOpen = useMenuIsOpen()

const header = useTemplateRef('header')

watch(menuIsOpen, (value) => {
  if (value) {
    nextTick(() => {
      if (header.value) {
        header.value.scrollTo(0, 0)
      }
    })
  }
})
</script>

<template>
  <header
    ref="header"
    :class="{ open: menuIsOpen }"
  >
    <center-wrapper>
      <div class="menu-wrapper">
        <nuxt-link-locale
          :to="{
            name: 'index',
          }"
          class="logo-wrapper"
        >
          <app-icon
            icon="adler:logo"
            class="logo"
          />
        </nuxt-link-locale>
        <main-navigation class="main-navigation" />
        <meta-navigation class="meta-navigation" />
      </div>
    </center-wrapper>
  </header>
</template>

<style lang="css" scoped>
.menu-wrapper {
  opacity: 0;
  translate: 0 -3em;
  transition:
    opacity var(--transition),
    translate var(--transition);

  @media (--navigation-md) {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: var(--spacing-4);
    align-items: end;
    opacity: 1;
    translate: 0 0;
    transition: none;
    reading-flow: grid-rows;
  }

  @media (--navigation-lg) {
    column-gap: var(--spacing-8);
  }
}

header {
  position: fixed;
  inset: 0 0 auto;
  z-index: var(--z-header);
  display: none;
  block-size: 0;
  padding: 5em var(--notch-right) 0 var(--notch-left);
  overflow: scroll;
  background: var(--color-white);
  transition:
    height var(--transition),
    overlay var(--transition) allow-discrete,
    display var(--transition) allow-discrete;
  transition-delay: calc(var(--transition-duration) / 2);

  &.open {
    display: block;
    block-size: 100vh;
    transition-delay: 0s;

    .menu-wrapper {
      opacity: 1;
      translate: 0 0;
      transition-delay: calc(var(--transition-duration) / 2);

      @starting-style {
        opacity: 0;
        translate: 0 -3em;
      }
    }

    @starting-style {
      block-size: 0;
    }
  }

  @media (--navigation-md) {
    position: relative;
    inset: auto;
    display: block;
    block-size: auto;
    padding: 0;
    overflow: visible;
    opacity: 1;
    translate: 0;
    transition: none;
    transition-duration: 0.01s;
  }
}

.logo-wrapper {
  @mixin link-reset;

  display: none;

  @media (--navigation-md) {
    display: block;
    inline-size: 5em;
    margin-block-start: var(--spacing-2);
  }

  @media (--navigation-lg) {
    grid-row: span 2;
    inline-size: 7em;
    margin-block-end: var(--spacing-3);
  }
}

.logo {
  display: block;
  inline-size: 100%;
  block-size: auto;
}

.meta-navigation {
  @media (--navigation-md) {
    place-self: start end;
  }
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
</style>
