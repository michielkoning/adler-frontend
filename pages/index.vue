<template>
  <div>
    <app-page :page="page">
      <arrangements-archive-section />
      <template v-slot:sidebar>
        <p>{{ page.pageId }}</p>
      </template>
    </app-page>
    <facilities-wrapper />
  </div>
</template>

<script>
import ArrangementsArchiveSection from '~/components/Arrangements/Archive/ArrangementsSection.vue'
import AppPage from '~/components/Layout/AppPage.vue'
import PageQuery from '~/graphql/Page.gql'
import { homePageId } from '~/data/pages'
import FacilitiesWrapper from '~/components/Facilitites/FacilitiesWrapper.vue'

export default {
  components: {
    ArrangementsArchiveSection,
    AppPage,
    FacilitiesWrapper,
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
  nuxtI18n: {
    paths: {
      de: '/arrangementen',
      en: '/arrangements',
      nl: '/arrangementen',
    },
  },
}
</script>
