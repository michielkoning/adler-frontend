<template>
  <img :loading="loading" alt="" :src="src" :width="width" :height="height" />
</template>

<script>
export default {
  props: {
    lazy: {
      type: Boolean,
      default: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    width() {
      if (this.hasSizeInSrc) {
        return this.getSizeFromUrl()[0]
      }
      return null
    },
    height() {
      if (this.hasSizeInSrc) {
        return this.getSizeFromUrl()[1]
      }
      return null
    },
    loading() {
      if (this.hasSizeInSrc && this.lazy) {
        return 'lazy'
      }
      return null
    },
    hasSizeInSrc() {
      return this.getSizeFromUrl().length > 1
    },
  },
  methods: {
    getSizeFromUrl() {
      const regex = /(\d{1,4})x(\d{1,4})/g
      const sizes = this.src.match(regex)
      if (sizes) {
        return sizes[0].split('x')
      }
      return []
    },
  },
}
</script>
