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
          popovertarget="menu"
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
.wrapper {
  position: sticky;
  top: 0;
  z-index: var(--z-mobile-navigation);
  padding-block: var(--spacing-2);
  color: var(--color-white);
  background: var(--color-primary);
  border-bottom: 1px solid currentcolor;
  transition: translate var(--transition);

  @container scroll-state(scrolled: bottom) {
    translate: 0 -100%;
  }

  @container scroll-state(scrolled: top) {
    translate: 0 0;
  }

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

button {
  @mixin btn;
  @mixin btn-small;

  display: flex;
  gap: var(--spacing-3);
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
