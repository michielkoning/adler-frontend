<template>
  <app-page :page="page" :show-resmio="false">
    <arrangements-archive-section
      v-if="arrangements.edges"
      :arrangements="arrangements.edges"
    />
  </app-page>
</template>

<script>
import AppPage from '~/components/Layout/AppPage.vue'
import PageQuery from '~/graphql/Pages/Page.gql'
import ArrangementsQuery from '~/graphql/Arrangements/Arrangements.gql'
import getSeoMetaData from '~/helpers/seo'
import { arrangementsPageId } from '~/data/pages'
import ArrangementsArchiveSection from '~/components/Arrangements/Archive/ArrangementsSection.vue'

export default {
  components: {
    ArrangementsArchiveSection,
    AppPage,
  },
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: arrangementsPageId[language],
      },
    })
    const arrangements = await app.apolloProvider.defaultClient.query({
      query: ArrangementsQuery,
      variables: {
        language: language.toUpperCase(),
      },
    })
    return {
      arrangements: arrangements.data.arrangements,
      page: page.data.page,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/arrangements',
      en: '/arrangements',
      nl: '/arrangementen',
    },
  },
  head() {
    return getSeoMetaData(this.page)
  },
}
</script>
