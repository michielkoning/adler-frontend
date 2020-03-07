<template>
  <div>
    <home-hero :page="page" />
    <resmio-widget />
    <arrangements-highlights-section />
    <facilities-wrapper />
  </div>
</template>

<script>
import PageQuery from '~/graphql/Page.gql'
import { homePageId } from '~/data/pages'
import FacilitiesWrapper from '~/components/Facilitites/FacilitiesWrapper.vue'
import HomeHero from '~/components/Home/HomeHero.vue'

import ArrangementsHighlightsSection from '~/components/Arrangements/Highlights/ArrangementsHighlightsSection.vue'
import ResmioWidget from '~/components/Shared/Resmio.vue'

export default {
  components: {
    FacilitiesWrapper,

    HomeHero,
    ArrangementsHighlightsSection,
    ResmioWidget,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: homePageId,
      },
    })
    return {
      page: page.data.page,
    }
  },
  layout: 'home',

  nuxtI18n: {
    paths: {
      de: '/',
      en: '/',
      nl: '/',
    },
  },
}
</script>
