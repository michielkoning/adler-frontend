<template>
  <div :class="$style.row">
    <facilities-group :facility="facilities.kids" :class="$style.group" />
    <div>
      <facilities-group :facility="facilities.rooms" :class="$style.group" />
      <facilities-group :facility="facilities.extras" :class="$style.group" />
    </div>
    <facilities-group
      :facility="facilities.environment"
      :class="$style.group"
    />
  </div>
</template>

<script>
import FacilitiesGroup from '~/components/Facilitites/FacilitiesGroup.vue'

export default {
  components: {
    FacilitiesGroup,
  },
  props: {
    facilities: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" module>
.row {
  display: grid;
  grid-gap: 1em;

  @media (--viewport-sm) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
