<template>
  <app-page :page="room" :show-resmio="false">
    <room-prices-group :prices="room.pricesGroup" />
    <room-services :services="room.services" />
    <template #sidebar>
      <book-room :title="room.title" :book-url="room.bookUrlGroup.bookUrl" />
      <related-rooms-section
        v-if="relatedRooms.edges.length"
        :rooms="relatedRooms.edges"
      />
    </template>
  </app-page>
</template>

<script>
import RoomQuery from '~/graphql/Rooms/Room.gql'
import getTranslations from '~/helpers/i18n'
import getSeoMetaData from '~/helpers/seo'
import RelatedRoomsQuery from '~/graphql/Rooms/RelatedRooms.gql'

export default {
  async asyncData({ app, params, store, redirect }) {
    const room = await app.apolloProvider.defaultClient.query({
      query: RoomQuery,
      variables: {
        uri: params.slug,
      },
    })

    if (!room.data.room) redirect(301, app.localePath('rooms'))

    const relatedRooms = await app.apolloProvider.defaultClient.query({
      query: RelatedRoomsQuery,
      variables: {
        notIn: room.data.room.databaseId,
        language: app.i18n.locale.toUpperCase(),
      },
    })

    const translations = getTranslations(
      app.i18n,
      room.data.room.translations,
      'slug',
      'slug',
    )

    await store.dispatch('i18n/setRouteParams', translations)

    return {
      room: room.data.room,
      relatedRooms: relatedRooms.data.relatedRooms,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/zimmer/:slug',
      en: '/rooms/:slug',
      nl: '/kamers/:slug',
    },
  },
  head() {
    return getSeoMetaData(this.room)
  },
}
</script>
