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

const menuIsOpen = useMenuIsOpen()
</script>

<template>
  <div

    class="page"
  >
    <nuxt-pwa-assets />
    <nuxt-route-announcer />
    <nuxt-loading-indicator color="var(--color-primary)" />
    <mobile-navigation />
    <the-header />
    <main
      id="content"
      class="main"
      tabindex="-1"
      :inert="menuIsOpen"
    >
      <nuxt-page />
    </main>
    <the-footer :inert="menuIsOpen" />
    <cookie-wall :inert="menuIsOpen" />
    <!-- <notification-modal :inert="isOpen" /> -->
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
