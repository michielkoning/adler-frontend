<template>
  <div :class="$style.wrapper">
    <ul ref="list" :class="$style.list">
      <li v-for="item in gallery" :key="item.id" :class="$style.item">
        <img :src="item.heroLarge" alt="" />
      </li>
    </ul>
    <div :class="$style['button-wrapper']">
      <button :class="$style.btn" @click="scrollToPreviousPage">Vorige</button>
      <button :class="$style.btn" @click="scrollToNextPage">Volgende</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    scrollToNextPage() {
      const { list } = this.$refs
      const size = list.clientWidth
      list.scrollBy(size, 0)
    },
    scrollToPreviousPage() {
      const { list } = this.$refs
      const size = list.clientWidth
      list.scrollBy(-size, 0)
    },
  },
}
</script>

<style lang="postcss" module>
.list {
  @mixin list-reset;
  display: flex;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  scroll-behavior: smooth;
}

.item {
  scroll-snap-align: start;
  flex: 0 0 100%;
  width: 100%;
}

.button-wrapper {
  display: flex;
  justify-content: space-between;
}

.btn {
  font-size: 2em;
}
</style>
