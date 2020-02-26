<template>
  <!-- eslint-disable-next-line -->
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
  font-size: 1.2em;
}
</style>
