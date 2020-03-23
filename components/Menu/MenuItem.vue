<template>
  <nuxt-link :to="url">{{ title }}</nuxt-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
