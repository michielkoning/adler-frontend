<template>
  <header>
    <center-wrapper>
      <div class="wrapper">
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
        <meta-navigation class="meta-navigation" />
        <main-navigation class="main-navigation" />
      </div>
    </center-wrapper>
  </header>
</template>

<style lang="css" scoped>
header {
  margin-bottom: var(--menu-height);
  color: var(--color-white);
  background: var(--color-primary);

  @media (--navigation-md) {
    margin: 0;
    color: var(--color-text);
    background: transparent;
  }
}

dialog {
  --header-height: 4em;

  top: auto;
  z-index: var(--z-main-navigation);
  width: 100dvw;
  max-width: none;
  height: calc(100dvh - var(--header-height));
  max-height: none;
  padding: var(--notch-top) var(--notch-right) 0 var(--notch-left);
  margin: 0;
  border: 0;
  transition: display var(--transition) allow-discrete, overlay var(--transition) allow-discrete;
  animation: dialog-hide var(--transition);

  &[open] {
    animation: dialog-show var(--transition);
    animation-delay: var(--transition-duration);

    &::backdrop {
      animation: backdrop-show var(--transition);
    }
  }

  &::backdrop {
    top: var(--header-height);
    background: var(--color-background);
    animation: backdrop-hide var(--transition);
  }
}

@starting-style {
  dialog[open] {
    opacity: 0;
    translate: 0 -1em;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  padding: 5em var(--gutter) var(--gutter);

  @media (--navigation-md) {
    display: grid;
    flex: 0 0 auto;
    grid-template-columns: auto 1fr;
    column-gap: var(--spacing-4);
    align-items: end;
    width: 100%;
    max-height: none;
    padding: 0;
    overflow: visible;
    transform: none;
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
    width: 5em;
    margin-top: var(--spacing-2);
  }

  @media (--navigation-lg) {
    grid-row: span 2;
    width: 7em;
    margin-bottom: var(--spacing-3);
  }
}

.logo {
  display: block;
  width: 100%;
  height: auto;
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

.image {
  display: block;
  width: 100%;
}
</style>
