<template>
  <ul v-if="facilities.length" :class="$style.groups">
    <facilities-group
      v-for="(facility, index) in facilities"
      :key="index"
      :facility="facility"
      :class="$style.group"
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

<style lang="postcss" module>
.groups {
  @mixin list-reset;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}

.group:nth-child(4) {
  grid-column: 2/3;
}
</style>
