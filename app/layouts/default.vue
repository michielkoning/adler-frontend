<script setup lang="ts">
const { title, facebookUrl, twitterUrl, instagramUrl, address }
  = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${title}` : title
  },
})

useSchemaOrg([
  defineLocalBusiness({
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

      if (entry.contentRect.width >= 768) {
        if (isOpen.value) {
          isOpen.value = false
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
    <nuxt-pwa-assets />
    <nuxt-route-announcer />
    <nuxt-loading-indicator color="var(--color-primary)" />
    <mobile-navigation v-model="isOpen" />
    <the-header v-model="isOpen" />
    <pre>
        {{ $pwaIcons }}
    </pre>

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
    min-block-size: 100dvh;
  }

  .main {
    flex: 1 1 auto;
  }
</style>
