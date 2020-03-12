<template>
  <div :class="$style.prices">
    <div :class="$style.group">
      <h2 :class="$style.title">{{ $t('HighSeason') }}</h2>
      <room-price
        :class="$style.price"
        :title="$t('fullBoard')"
        :price="prices.fullBoardHighSeason"
      />
      <room-price
        :class="$style.price"
        :title="$t('halfBoard')"
        :price="prices.halfBoardHighSeason"
      />
    </div>
    <div :class="$style.group">
      <h2 :class="$style.title">{{ $t('LowSeason') }}</h2>
      <room-price
        :class="$style.price"
        :title="$t('fullBoard')"
        :price="prices.fullBoardLowSeason"
      />
      <room-price
        :class="$style.price"
        :title="$t('halfBoard')"
        :price="prices.halfBoardLowSeason"
      />
    </div>
  </div>
</template>

<script>
import RoomPrice from '~/components/Rooms/Prices/RoomPrice.vue'

export default {
  components: {
    RoomPrice,
  },
  props: {
    prices: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" module>
.prices {
  display: grid;
  grid-gap: var(--gutter);
  margin-bottom: var(--spacing-l);

  @media (--viewport-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.group {
  display: flex;
  flex-wrap: wrap;
}

.price {
  margin-right: var(--spacing-s);
}

.title {
  flex: 0 0 100%;
}
</style>

<i18n>
{
  "nl": {
    "HighSeason": "Hoogseizoen",
    "LowSeason": "Tussenseizoen",
    "fullBoard": "Inclusief ontbijt",
    "halfBoard": "Halfpension"
  }
}
</i18n>
