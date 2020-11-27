<template>
  <app-page :page="page">
    <block-map />

    <div :class="$style.wrapper">
      <the-address />
      <opening-times />
      <social-media-links />
    </div>

    <template #sidebar>
      <form-contact />
    </template>
  </app-page>
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import { contactPageId } from '~/data/pages'
import getSeoMetaData from '~/helpers/seo'
import FormContact from '~/components/Forms/FormContact.vue'
import BlockMap from '~/components/Contact/BlockMap.vue'
import SocialMediaLinks from '~/components/Contact/SocialMediaLinks.vue'
import TheAddress from '~/components/Contact/TheAddress.vue'
import OpeningTimes from '~/components/Contact/OpeningTimes.vue'

export default {
  components: {
    AppPage,
    FormContact,
    BlockMap,
    SocialMediaLinks,
    TheAddress,
    OpeningTimes,
  },
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: contactPageId[language],
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
      de: '/kontakt',
      en: '/contact',
      nl: '/contact',
    },
  },
  head() {
    return getSeoMetaData(this.page)
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
