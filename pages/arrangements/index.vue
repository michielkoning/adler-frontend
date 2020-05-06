<template>
  <app-page :page="page" :show-resmio="false">
    <arrangements-archive-section />
  </app-page>
</template>

<script>
import ArrangementsArchiveSection from '~/components/Arrangements/Archive/ArrangementsSection.vue'
import AppPage from '~/components/Layout/AppPage.vue'
import PageQuery from '~/graphql/Pages/Page.gql'
import getSeoMetaData from '~/helpers/seo'
import { arrangementsPageId } from '~/data/pages'

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
    return {
      page: page.data.page,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/arrangementen',
      en: '/arrangements',
      nl: '/arrangementen',
    },
  },
  head() {
    return getSeoMetaData(this.page)
  },
}
</script>
