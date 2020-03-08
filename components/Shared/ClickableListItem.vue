<template>
  <component
    :is="tag"
    :class="$style['list-item']"
    @mousedown.left="mouseDown"
    @mouseup.left="mouseUp"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },

    tag: {
      type: String,
      default: 'li',
    },
  },
  data() {
    return {
      down: null,
    }
  },
  methods: {
    mouseUp() {
      const up = +new Date()
      if (up - this.down < 200) {
        this.goToItem()
      }
    },
    mouseDown() {
      this.down = +new Date()
    },
    goToItem() {
      this.$router.push(this.url)
    },
  },
}
</script>

<style lang="postcss" module>
.list-item {
  cursor: pointer;
}
</style>
