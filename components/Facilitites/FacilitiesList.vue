<template>
  <ul v-if="list.length">
    <facilities-list-item
      v-for="(item, index) in list"
      :key="index"
      :item="item"
    />
  </ul>
</template>

<script>
import FacilitiesListItem from '~/components/Facilitites/FacilitiesListItem.vue'

export default {
  components: {
    FacilitiesListItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
