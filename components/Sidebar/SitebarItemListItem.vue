<template>
  <li>
    <nuxt-link :to="`/arrangementen/${item.slug}`">
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
