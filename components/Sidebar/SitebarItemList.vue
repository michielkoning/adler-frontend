<template>
  <ul v-if="items.length" :class="$style.list">
    <sidebar-item-list-item
      v-for="item in items"
      :key="item.node.id"
      :item="item.node"
    />
  </ul>
</template>

<script>
import SidebarItemListItem from '~/components/Sidebar/SitebarItemListItem.vue'

export default {
  components: {
    SidebarItemListItem,
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

  & > li {
    margin-bottom: var(--spacing-s);
  }
}
</style>
