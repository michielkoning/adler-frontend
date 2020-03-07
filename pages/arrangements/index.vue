<template>
  <app-page :page="page">
    <arrangements-archive-section />
  </app-page>
</template>

<script>
import ArrangementsArchiveSection from '~/components/Arrangements/Archive/ArrangementsSection.vue'
import AppPage from '~/components/Layout/AppPage.vue'
import PageQuery from '~/graphql/Page.gql'
import { arrangementsPageId } from '~/data/pages'

export default {
  components: {
    ArrangementsArchiveSection,
    AppPage,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: arrangementsPageId,
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
}
</script>
