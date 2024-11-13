<template>
  <header class="header">
    <center-wrapper>
      <div class="background">
        <div class="content">
          <div class="logo-wrapper">logo</div>
          <!-- <nuxt-link-locale class="logo" :to="{ name: 'index' }">
            <app-icon
              icon="logo"
              class="image"
              aria-hidden="true"
              width="497"
              height="424"
            />
            <span class="sr-only">{{ title }}</span>
          </nuxt-link-locale> -->
          <meta-navigation class="meta-navigation" />
          <the-menu class="main-navigation" />
        </div>
      </div>
    </center-wrapper>
  </header>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

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

.logo {
  width: 100%;
  height: auto;
  display: block;
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

.image {
  display: block;
  width: 100%;
}
</style>
