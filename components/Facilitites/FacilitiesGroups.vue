<template>
  <ul v-if="facilities.length">
    <facilities-group
      v-for="(facility, index) in facilities"
      :key="index"
      :facility="facility"
    />
  </ul>
</template>

<script>
import FacilitiesGroup from '~/components/Facilitites/FacilitiesGroup.vue'

export default {
  components: {
    FacilitiesGroup,
  },
  props: {
    facilities: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
