<template>
  <li>
    <h2>{{ facility.title }}</h2>
    {{ facility.icon }}
    <facilities-list :list="facility.list" />
  </li>
</template>

<script>
import FacilitiesList from '~/components/Facilitites/FacilitiesList.vue'

export default {
  components: {
    FacilitiesList,
  },
  props: {
    facility: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
