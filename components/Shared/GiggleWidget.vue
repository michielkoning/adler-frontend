<script>
export default {
  props: {
    stream: {
      type: String,
      required: true,
    },
  },
  head() {
    return {
      script: [
        {
          src: `https://widget.giggle.tips/widget.js?id=gt1&path=familienhoteladler&width=100%&fontCol=98012E&btCol=98012E&font=Dosis&lang=${this.$i18n.locale}&${this.stream}&smallVersion=true`,
          body: true,
          async: true,
          defer: true,
        },
      ],
    }
  },
}
</script>

<template>
  <div id="gt1" class="widget" />
</template>

<style lang="postcss" scoped>
.widget {
  margin-block: 2em;
}
</style>
