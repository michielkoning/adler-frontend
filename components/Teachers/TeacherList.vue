<template>
  <apollo-query :query="require('~/graphql/Rooms.gql')">
    <template slot-scope="{ result: { data } }">
      <ul v-if="data.rooms.edges.length" class="list">
        <teacher-list-item
          v-for="room in data.rooms.edges"
          :key="room.node.id"
          :room="room.node"
        />
      </ul>
    </template>
  </apollo-query>
</template>

<script>
import TeacherListItem from '~/components/Teachers/TeacherListItem.vue'
export default {
  components: {
    TeacherListItem,
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
}
</style>
