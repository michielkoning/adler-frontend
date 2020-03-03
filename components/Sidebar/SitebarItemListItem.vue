<template>
  <li>
    <nuxt-link :to="item.relativeUrl">
      {{ item.title }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
