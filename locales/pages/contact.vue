<template>
  <app-page :page="page">
    <block-map />
    <div :class="$style.wrapper">
      <the-address />
      <opening-hours />
      <social-media-links />
    </div>
    <template v-slot:sidebar>
      <form-contact />
    </template>
  </app-page>
</template>

<script>
import SocialMediaLinks from '~/components/Contact/SocialMediaLinks.vue'
import FormContact from '~/components/Forms/FormContact.vue'
import BlockMap from '~/components/Contact/BlockMap.vue'
import PageQuery from '~/graphql/Pages/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import { contactPageId } from '~/data/pages'
import TheAddress from '~/components/Contact/TheAddress.vue'
import OpeningHours from '~/components/Contact/OpeningHours.vue'

export default {
  components: {
    AppPage,
    FormContact,
    BlockMap,
    SocialMediaLinks,
    TheAddress,
    OpeningHours,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: contactPageId,
      },
    })
    return {
      page: page.data.page,
      link: [
        {
          rel: 'dns-prefetch',
          href: '//maps.googleapis.com',
        },
      ],
    }
  },
  nuxtI18n: {
    paths: {
      de: '/contact',
      en: '/contact',
      nl: '/contact',
    },
  },
}
</script>

<style lang="postcss" module>
.wrapper {
  display: grid;
  grid-gap: var(--gutter);

  @media (--viewport-sm) {
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  }
}
</style>
