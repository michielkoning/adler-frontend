<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="intro" v-html="text" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
.intro {
  font-size: 1.25em;
}
</style>
