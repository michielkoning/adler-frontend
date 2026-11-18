<script setup lang="ts">
const { title }
  = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${title}` : title
  },
})

const menuIsOpen = useMenuIsOpen()

const { closeMobileMenu } = useMenu()

const { fullNavigation }
  = useAppConfig()

const page = useTemplateRef('page')
let observer: ResizeObserver | undefined

onMounted(() => {
  if (!page.value) return

  observer = new ResizeObserver(
    (entries) => {
      if (!entries.length || !page.value) {
        return
      }

      const entry = entries[0]
      if (!entry) {
        return
      }

      if (entry.contentRect.width >= fullNavigation) {
        if (menuIsOpen.value) {
          closeMobileMenu()
        }
      }
    },
  )

  if (observer) {
    observer.observe(page.value)
  }
})

onUnmounted(() => {
  if (!page.value || !observer) return
  observer.unobserve(page.value)
})
</script>

<template>
  <div
    ref="page"
    class="page"
  >
    <nuxt-pwa-manifest />
    <nuxt-route-announcer />
    <nuxt-loading-indicator color="var(--color-primary)" />
    <skip-links />
    <mobile-navigation />
    <the-header />
    <main
      id="content"
      class="main"
      :inert="menuIsOpen"
    >
      <nuxt-page />
    </main>
    <the-footer :inert="menuIsOpen" />
    <cookie-wall :inert="menuIsOpen" />
    <notification-modal :inert="menuIsOpen" />
  </div>
</template>

<style lang="css" scoped>
  .page {
    display: flex;
    flex-direction: column;
    min-block-size: 100dvh;
  }

  .main {
    flex: 1 1 auto;
  }
</style>
