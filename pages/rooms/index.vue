<template>
  <app-page :page="page" :show-resmio="false">
    <rooms-section v-if="rooms.edges.length" :rooms="rooms.edges" />
    <template #sidebar>
      <book-room :title="$t('bookNow')" />
    </template>
  </app-page>
</template>

<script>
import PageQuery from '~/graphql/Pages/Page.gql'
import RoomsQuery from '~/graphql/Rooms/Rooms.gql'
import getSeoMetaData from '~/helpers/seo'
import { roomsPageId } from '~/data/pages'

export default {
  async asyncData({ app, params }) {
    const language = app.i18n.locale
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: roomsPageId[language],
      },
    })
    const rooms = await app.apolloProvider.defaultClient.query({
      query: RoomsQuery,
      variables: {
        language: language.toUpperCase(),
      },
    })
    return {
      page: page.data.page,
      rooms: rooms.data.rooms,
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
