<script lang="ts" setup>
const { title } = useAppConfig()

const { closeMobileMenu, togleMobileMenu } = useMenu()

const menuIsOpen = useMenuIsOpen()

const button = useTemplateRef('button')
const { fullNavigation } = useAppConfig()

watch(menuIsOpen, (value) => {
  if (!value && window.innerWidth < fullNavigation) {
    button.value?.focus()
  }
})
</script>

<template>
  <div class="wrapper">
    <center-wrapper :top="true">
      <div class="buttons">
        <nuxt-link-locale
          class="logo-wrapper"
          :to="{ name: 'index' }"
          @click="closeMobileMenu"
        >
          <app-icon
            icon="adler:logo-sm"
            class="logo"
            aria-hidden="true"
          />
          <span class="sr-only">{{ title }}</span>
        </nuxt-link-locale>
        <button
          ref="button"
          type="button"
          :aria-expanded="menuIsOpen"
          aria-controls="menu"
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

<style lang="css" scoped>
.wrapper {
  position: sticky;
  inset-block-start: 0;
  z-index: var(--z-mobile-navigation);
  padding-block: var(--spacing-2);
  color: var(--color-white);
  background: var(--color-primary);
  border-block-end: 1px solid currentcolor;
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

  &:has([aria-expanded="true"]) {
    translate: 0 0;
  }

  :deep(:focus-visible) {
    outline-color: var(--color-white);
  }
}

.buttons {
  display: flex;
  gap: var(--spacing-4);
  align-items: center;
  justify-content: space-between;
}

.logo-wrapper {
  display: flex;
  align-items: center;
}

.logo {
  inline-size: 10em;
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
  inline-size: 1em;
}
</style>
