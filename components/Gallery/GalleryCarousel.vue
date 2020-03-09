<template>
  <div :class="$style.wrapper">
    <ul :class="$style.list">
      <li v-for="item in gallery" :key="item.id" :class="$style.item">
        <img :src="item.heroLarge" alt="" />
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
}
</script>

<style lang="postcss" module>
.list {
  @mixin list-reset;
  display: flex;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
}

.item {
  scroll-snap-align: start;
  flex: 0 0 100%;
  width: 100%;
}
</style>
