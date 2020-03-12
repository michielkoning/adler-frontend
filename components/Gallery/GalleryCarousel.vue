<template>
  <div :class="$style.wrapper">
    {{ scrollEnd }}
    <ul ref="list" :class="$style.list" @scroll.passive="onScroll">
      <li v-for="item in gallery" :key="item.id" :class="$style.item">
        <img :src="item.heroLarge" alt="" />
      </li>
    </ul>
    <div :class="$style['button-wrapper']">
      <button :class="$style.btn" @click="scrollToPreviousPage">Vorige</button>
      <button :class="$style.btn" @click="scrollToNextPage">Volgende</button>
    </div>
    <ul :class="$style.paging">
      <li v-for="(item, index) in gallery" :key="item.id">
        {{ index }}
      </li>
    </ul>
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
  data() {
    return {
      isScrolling: false,
      scrollEnd: true,
    }
  },
  mounted() {
    document.addEventListener('keydown', event => this.scrollByKeys(event))
  },
  destroyed() {
    document.removeEventListener('keydown', event => this.scrollByKeys(event))
  },

  methods: {
    scrollByKeys(event) {
      const key = event.key // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
      if (key === 'ArrowRight') {
        this.scrollToNextPage()
      }
      if (key === 'ArrowLeft') {
        this.scrollToPreviousPage()
      }
    },
    onScroll() {
      window.console.log('test')
    },
    test() {
      // Clear our timeout throughout the scroll
      this.scrollEnd = false
      window.clearTimeout(this.isScrolling)

      // Set a timeout to run after scrolling ends
      this.isScrolling = setTimeout(function() {
        // Run the callback
        this.scrollEnd = true
      }, 66)
    },
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

.paging {
  @mixin list-reset;

  display: flex;

  & li {
    padding: 1em;
  }
}
</style>
