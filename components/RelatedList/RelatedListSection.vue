<template>
  <sitebar-item-section :title="title">
    <sitebar-item-list :items="items" />
  </sitebar-item-section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
