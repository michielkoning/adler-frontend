<template>
  <header class="header">
    <center-wrapper>
      <div class="background">
        <div class="content">
          <nuxt-link-locale class="logo" :to="{ name: 'index' }">
            <app-icon
              icon="logo"
              class="image"
              aria-hidden="true"
              width="497"
              height="424"
            />
            <span class="sr-only">{{ title }}</span>
          </nuxt-link-locale>
          <the-menu />
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

.logo {
  width: 100%;
  height: auto;
  display: block;
}

.image {
  display: block;
  width: 100%;
}
</style>
