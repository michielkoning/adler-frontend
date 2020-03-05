<template>
  <app-page :page="room">
    <div>
      {{ room.gallery }}
      {{ room.pricesGroup.fullBoardHighSeason }}
      {{ room.pricesGroup.fullBoardLowSeason }}
      {{ room.pricesGroup.halfBoardHighSeason }}
      {{ room.pricesGroup.halfBoardLowSeason }}
      <h2>Kamer is voorzien van:</h2>
      <ul v-if="room.services.edges.length" :class="$style.list">
        <li v-for="service in room.services.edges" :key="service.node.id">
          {{ service.node.name }}
        </li>
      </ul>
    </div>
    <template v-slot:sidebar>
      <related-rooms-section :not-in="room.arrangementId" />
    </template>
  </app-page>
</template>

<script>
import RoomQuery from '~/graphql/Room.gql'
import AppPage from '~/components/Layout/AppPage.vue'
import RelatedRoomsSection from '~/components/Rooms/Related/RelatedRoomsSection.vue'

export default {
  components: {
    AppPage,
    RelatedRoomsSection,
  },
  async asyncData({ app, params }) {
    const room = await app.apolloProvider.defaultClient.query({
      query: RoomQuery,
      variables: {
        uri: params.slug,
      },
    })
    return {
      room: room.data.room,
    }
  },
  nuxtI18n: {
    paths: {
      nl: '/kamers/:slug',
    },
  },
}
</script>

<style lang="postcss" module>
.list {
  display: grid;
  grid-column-gap: var(--gutter);
  grid-template-columns: repeat(2, 1fr);
}
</style>
