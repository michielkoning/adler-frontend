<template>
  <app-page :page="page" :show-resmio="false">
    <rooms-archive-section />

    <template #sidebar>
      <book-room :title="$t('bookNow')" />
    </template>
  </app-page>
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import getSeoMetaData from '~/helpers/seo'
import { roomsPageId } from '~/data/pages'
import BookRoom from '~/components/Rooms/Details/BookRoom.vue'

export default {
  components: {
    RoomsArchiveSection: () =>
      import('~/components/Rooms/Archive/RoomsSection.vue'),
    AppPage,
    BookRoom,
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
