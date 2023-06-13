<template>
  <li :class="$style.item">
    <div :class="$style.content">
      <h2 :class="$style.title">
        {{ item.title }}
      </h2>
      <!-- <span v-if="item.lastMinute.dates.dateFrom">
        Van
        {{ $d(new Date(item.lastMinute.dates.dateFrom), 'short') }}
        tot
        {{ item.lastMinute.dates.dateUntill }}
      </span> -->
    </div>
    <price-badge
      v-if="item.lastMinute.price"
      :price="item.lastMinute.price"
      :class="$style['price-badge']"
    />
    <image-archive :image="item.featuredImage" :class="$style.image" />
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

<style lang="postcss" module>
.item {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;

  &:focus-within,
  &:hover {
    border-color: var(--color-primary);
  }
}

.content {
  background: var(--color-white);
  padding: var(--spacing-m);
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
}

.link {
  @mixin link-reset;
}

.image {
  height: 14em;
  order: -1;
}

.read-more {
  margin-top: auto;
  align-self: center;
}

.price-badge {
  position: absolute;
  top: 3em;
  right: calc(var(--spacing-s) * -1);
}
</style>
