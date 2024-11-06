<script lang="ts" setup>
defineProps<{
  prices: {
    fullBoardHighSeason?: number;
    halfBoardHighSeason?: number;
    fullBoardLowSeason?: number;
    halfBoardLowSeason?: number;
  }
}>()
</script>

<template>
  <div class="prices">
    <div class="group">
      <h2 class="title">{{ $t("highSeason") }}</h2>
      <room-price
        class="price"
        :title="$t('fullBoard')"
        v-if="prices.fullBoardHighSeason"
        :price="prices.fullBoardHighSeason"
      />
      <room-price
        class="price"
        :title="$t('halfBoard')"
        v-if="prices.halfBoardHighSeason"
        :price="prices.halfBoardHighSeason"
      />
    </div>
    <div class="group">
      <h2 class="title">{{ $t("lowSeason") }}</h2>
      <room-price
        class="price"
        :title="$t('fullBoard')"
        v-if="prices.fullBoardLowSeason"
        :price="prices.fullBoardLowSeason"
      />
      <room-price
        class="price"
        :title="$t('halfBoard')"
        v-if="prices.halfBoardLowSeason"
        :price="prices.halfBoardLowSeason"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import '~/assets/css/media-queries/media-queries.css';

.prices {
  display: grid;
  grid-gap: var(--gutter);
  margin-bottom: var(--spacing-m);

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

