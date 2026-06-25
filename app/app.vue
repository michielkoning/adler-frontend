<script setup lang="ts">
const { title, facebookUrl, twitterUrl, instagramUrl, address }
  = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${title}` : title
  },
})

useSchemaOrg([
  defineOrganization({
    name: title,
    logo: {
      '@type': 'ImageObject',
      'inLanguage': 'nl-NL',
      '@id': 'https://www.loesje.nl/#/schema/logo/image/',
      'url': 'https://shop.loesje.nl/wp-content/uploads/2016/10/logo.png',
      'contentUrl':
          'https://shop.loesje.nl/wp-content/uploads/2016/10/logo.png',
      'width': 260,
      'height': 150,
      'caption': title,
    },
    sameAs: [twitterUrl, facebookUrl, instagramUrl],
    telephone: address.phoneNumber,
    email: address.emailAddress,
    address: {
      postalCode: address.postalCode,
      streetAddress: address.street,
      locality: address.city,
      addressCountry: address.country,
      addressRegion: address.region,
    },
  }),
  defineWebSite({
    name: title,
  }),
])

const isOpen = ref(false)

const menu = useTemplateRef('page')
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

      if (entry.contentRect.width >= 768) {
        if (menu.value.checkVisibility()) {
          isOpen.value = false
        }
      }
      else {
        menu.value.setAttribute('popover', '')
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
  <div
    ref="page"
    class="page"
  >
    <nuxt-pwa-assets />
    <nuxt-route-announcer />
    <nuxt-loading-indicator color="var(--color-primary)" />
    <mobile-navigation v-model="isOpen" />
    <the-header v-model="isOpen" />
    <main
      id="content"
      class="main"
      tabindex="-1"
      :inert="isOpen"
    >
      <nuxt-page />
    </main>
    <the-footer :inert="isOpen" />
    <cookie-wall :inert="isOpen" />
    <notification-modal :inert="isOpen" />
  </div>
</template>

<style lang="css" scoped>
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  .main {
    flex: 1 1 auto;
  }
</style>
