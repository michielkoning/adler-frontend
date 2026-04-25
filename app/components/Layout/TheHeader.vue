<script lang="ts" setup>
const { title } = useAppConfig()
</script>

<template>
  <header class="header">
    <mobile-navigation />
    <dialog
      id="menu"
      popover
      closedby="any"
    >
      <center-wrapper>
        <h1>trest</h1>
      </center-wrapper>
    </dialog>
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

.content {
  display: flex;
  flex-direction: column;
  padding: 5em var(--gutter) var(--gutter);

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
  @media (--show-full-navigation) {
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

@keyframes dialog-hide {
  from {
    opacity: 1;
    translate: 0 0;
  }

  to {
    opacity: 0;
    translate: 0 -1em;
  }
}

@keyframes dialog-show {
  from {
    opacity: 0;
    translate: 0 -1em;
  }

  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes backdrop-show {
  from {
    translate: 0 -100dvh;
  }

  to {
    translate: 0 0;
  }
}

@keyframes backdrop-hide {
  from {
    opacity: 1;
    backdrop-filter: blur(0.25em);
  }

  to {
    opacity: 0;
    backdrop-filter: blur(0);
  }
}
</style>
