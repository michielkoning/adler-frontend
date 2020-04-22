<template>
  <app-page :page="page">
    <rooms-archive-section />
  </app-page>
</template>

<script>
import RoomsArchiveSection from '~/components/Rooms/Archive/RoomsSection.vue'
import PageQuery from '~/graphql/Pages/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import getSeoMetaData from '~/helpers/seo'
import { roomsPageId } from '~/data/pages'

export default {
  components: {
    RoomsArchiveSection,
    AppPage,
  },
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: roomsPageId[language],
      },
    })
    return {
      page: page.data.page,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/zimmer',
      en: '/rooms',
      nl: '/kamers',
    },
  },
  head() {
    return getSeoMetaData(this.page)
  },
}
</script>
