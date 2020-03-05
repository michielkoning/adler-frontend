<template>
  <ul v-if="list.length" :class="$style.list">
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

<style lang="postcss" module>
.list {
  @mixin list-reset;
  margin-bottom: var(--spacing-l);
}
</style>
