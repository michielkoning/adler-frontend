<script lang="ts" setup>
const { title } = useAppConfig()
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
          commandfor="menu"
          command="show-modal"
          type="button"
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

<style lang="css" scoped>
  @import "~/assets/css/media-queries/media-queries.css";

  .wrapper {
    position: fixed;
    inset: 0 0 auto;
    z-index: var(--z-mobile-navigation);
    padding-block: var(--spacing-s);
    color: var(--color-white);
    background: var(--color-primary);
    border-bottom: 1px solid var(--color-white);

    @media (--navigation-md) {
      display: none;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    @mixin btn-small;

    display: flex;
    gap: var(--spacing-s);
    align-items: center;
    color: currentcolor;
    border-color: var(--color-white);

    &[aria-expanded="true"] {
      color: var(--color-primary);
      background: var(--color-white);
    }
  }

  .bars {
    width: 1em;
  }
</style>
