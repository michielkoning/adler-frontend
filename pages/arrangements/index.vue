<template>
  <app-page :page="page">
    <arrangements-archive-section />
    <template v-slot:sidebar>
      <p>{{ page.pageId }}</p>
    </template>
  </app-page>
</template>

<script>
import ArrangementsArchiveSection from '~/components/Arrangements/Archive/ArrangementsSection.vue'
import AppPage from '~/components/Layout/AppPage.vue'
import PageQuery from '~/graphql/Page.gql'
import { arrangements } from '~/data/pages'

export default {
  components: {
    ArrangementsArchiveSection,
    AppPage,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: arrangements.pageId,
      },
    })
    return {
      page: page.data.page,
    }
  },
  nuxtI18n: {
    paths: {
      nl: '/arrangementen',
      en: '/arrangements',
    },
  },
}
</script>
