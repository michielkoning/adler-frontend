<template>
  <ul v-if="items.length" :class="$style.list">
    <archive-list-item
      v-for="item in items"
      :key="item.node.id"
      :item="item.node"
    />
  </ul>
</template>

<script>
import ArchiveListItem from '~/components/Shared/Archive/ArchiveListItem.vue'

export default {
  components: {
    ArchiveListItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" module>
.list {
  @mixin list-reset;
}
</style>
