<script lang="ts" setup>
const { title } = useAppConfig()

const { togleMobileMenu } = useLayout()
const menuIsOpen = useMenu()
</script>

<template>
  <div class="wrapper">
    <center-wrapper :top="true">
      <div class="buttons">
        <nuxt-link-locale
          class="logo-wrapper"
          :to="{ name: 'index' }"
        >
          <app-icon
            icon="adler:logo-sm"
            class="logo"
            aria-hidden="true"
          />
          <span class="sr-only">{{ title }}</span>
        </nuxt-link-locale>
        <button
          :aria-expanded="menuIsOpen"
          class="btn"
          type="button"
          @click="togleMobileMenu"
        >
          <app-icon
            icon="fa6-solid:bars"
            aria-hidden="true"
            class="bars"
          />
          {{ $t("menu") }}
        </button>
      </div>
    </center-wrapper>
  </div>
</template>

<style scoped>
  @import "~/assets/css/media-queries/media-queries.css";

  .wrapper {
    color: var(--color-white);
    position: fixed;
    padding-block: var(--spacing-s);
    inset: 0 0 auto;
    background: var(--color-primary);
    z-index: var(--z-mobile-navigation);
    border-bottom: 1px solid var(--color-white);

    @media (--navigation-md) {
      display: none;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 10em;
  }

  .btn {
    @mixin btn;

    gap: var(--spacing-s);
    color: currentColor;
    font-size: var(--font-size-xs);
    border-color: var(--color-white);
    display: flex;
    align-items: center;

    &[aria-expanded="true"] {
      background: var(--color-white);
      color: var(--color-primary);
    }
  }

  .bars {
    width: 1.5em;
  }
</style>
