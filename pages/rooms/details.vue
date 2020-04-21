<template>
  <app-page :page="room">
    {{ translations }}
    <room-prices-group :prices="room.pricesGroup" />
    <room-services :services="room.services" />
    <template v-slot:sidebar>
      <book-room :title="room.title" :book-url="room.bookUrlGroup.bookUrl" />
      <related-rooms-section :not-in="room.databaseId" />
    </template>
  </app-page>
</template>

<script>
import RoomQuery from '~/graphql/Rooms/Room.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import RelatedRoomsSection from '~/components/Rooms/Related/RelatedRoomsSection.vue'
import RoomPricesGroup from '~/components/Rooms/Prices/RoomPricesGroup.vue'
import BookRoom from '~/components/Rooms/Details/BookRoom.vue'
import RoomServices from '~/components/Rooms/Details/RoomServices.vue'
import getTranslations from '~/helpers/i18n'

export default {
  components: {
    AppPage,
    RelatedRoomsSection,
    RoomPricesGroup,
    BookRoom,
    RoomServices,
  },
  async asyncData({ app, params, store }) {
    const room = await app.apolloProvider.defaultClient.query({
      query: RoomQuery,
      variables: {
        uri: params.slug,
      },
    })

    const translations = getTranslations(
      app.i18n,
      room.data.room.translations,
      'slug',
      'uri',
    )

    await store.dispatch('i18n/setRouteParams', translations)

    return {
      room: room.data.room,
      translations,
    }
  },
  nuxtI18n: {
    paths: {
      de: '/zimmer/:slug',
      en: '/rooms/:slug',
      nl: '/kamers/:slug',
    },
  },
}
</script>
