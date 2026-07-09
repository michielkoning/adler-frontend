<script lang="ts" setup>
const menuIsOpen = useMenuIsOpen()
</script>

<template>
  <header
    id="menu"
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
header {
  position: fixed;
  inset: 0;
  z-index: var(--z-header);
  display: none;
  padding: 5em var(--notch-right) 0 var(--notch-left);
  background: var(--color-white);
  opacity: 0;
  translate: 0 -1em;
  transition:
    opacity var(--transition),
    translate var(--transition),
    overlay var(--transition) allow-discrete,
    display var(--transition) allow-discrete;

  &.open {
    display: block;
    opacity: 1;
    translate: 0;

    @starting-style {
      opacity: 0;
      translate: 0 -1em;
    }
  }

  @media (--navigation-md) {
    position: relative;
    inset: auto;
    display: block;
    padding: 0;
    opacity: 1;
    translate: 0;
    transition-duration: 0.01s;
  }
}

.menu-wrapper {
  display: flex;
  flex-direction: column;

  @media (--navigation-md) {
    display: grid;
    reading-flow: grid-rows;
    grid-template-columns: auto 1fr;
    column-gap: var(--spacing-4);
    align-items: end;
  }

  @media (--navigation-lg) {
    column-gap: var(--spacing-8);
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
