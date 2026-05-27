<script lang="ts" setup>
const menu = useTemplateRef('menu')

const closePopover = () => {
  if (!menu.value) {
    return
  }
  if (menu.value.hasAttribute('popover')) {
    menu.value.hidePopover()
  }
}

let observer: ResizeObserver | undefined

onMounted(() => {
  if (!menu.value) return

  observer = new ResizeObserver(
    (entries) => {
      if (!entries.length || !menu.value) {
        return
      }

      const entry = entries[0]
      if (!entry) {
        return
      }

      if (entry.contentRect.width >= 960) {
        if (menu.value.hasAttribute('popover')) {
          menu.value.removeAttribute('popover')
        }
      }
      else {
        if (!menu.value.hasAttribute('popover')) {
          menu.value.setAttribute('popover', '')
        }
      }
    },
  )

  if (observer) {
    observer.observe(document.body)
  }
})

onUnmounted(() => {
  if (!menu.value || !observer) return
  observer.unobserve(menu.value)
})
</script>

<template>
  <header>
    <button
      class="btn-open"
      popovertarget="menu"
    >
      <app-icon
        class="icon"
        icon="solar:hamburger-menu-linear"
      />
      Menu
    </button>
    <div
      id="menu"
      ref="menu"
      popover
      class="menu"
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
          <meta-navigation class="meta-navigation" />
          <main-navigation class="main-navigation" />
        </div>
      </center-wrapper>
    </div>
  </header>
</template>

<style lang="css" scoped>
header {
  margin-bottom: var(--menu-height);
  color: var(--color-text);
  background: var(--color-white);

  @media (--navigation-md) {
    margin: 0;
    background-color: transparent;
  }
}

.menu {
  --header-height: 4em;

  top: auto;
  width: 100dvw;
  max-width: none;
  height: calc(100dvh - var(--header-height));
  max-height: none;
  padding: var(--notch-top) var(--notch-right) 0 var(--notch-left);
  margin: 0;
  border: 0;
  opacity: 0;
  translate: 0 -1em;
  transition:
    opacity var(--transition),
    translate var(--transition),
    overlay var(--transition) allow-discrete,
    display var(--transition) allow-discrete;

  &:popover-open {
    opacity: 1;
    translate: 0;

    @starting-style {
      opacity: 0;
      translate: 0 -1em;
    }
  }

  @media (--navigation-md) {
    position: relative;
    display: block;
    width: auto;
    height: auto;
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

.btn-open {
  @media (--navigation-md) {
    display: none;
  }
}
</style>
