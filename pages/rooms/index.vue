<template>
  <app-page :page="page">
    <rooms-archive-section />
    <template v-slot:sidebar>
      <p>{{ page.pageId }}</p>
    </template>
  </app-page>
</template>

<script>
import RoomsArchiveSection from '~/components/Rooms/Archive/RoomsSection.vue'
import PageQuery from '~/graphql/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import { rooms } from '~/data/pages'

export default {
  components: {
    RoomsArchiveSection,
    AppPage,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: rooms.pageId,
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
}
</script>
