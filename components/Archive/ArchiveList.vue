<template>
  <ul v-if="items.length" :class="$style.list">
    <archive-item v-for="item in items" :key="item.node.id" :item="item.node" />
  </ul>
</template>

<script>
import ArchiveItem from '~/components/Archive/ArchiveItem.vue'

export default {
  components: {
    ArchiveItem,
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
