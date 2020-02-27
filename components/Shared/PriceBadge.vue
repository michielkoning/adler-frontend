<template>
  <div v-if="price" :class="$style['price-badge']">
    <div :class="$style.label">{{ $t('from') }}</div>
    <div :class="$style.value">{{ $n(price, 'currency') }}</div>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="postcss" module>
.price-badge {
  font-family: var(--font-family-header);
  background-color: var(--color-2);
  border-radius: 50%;
  color: var(--color-white);
  line-height: 1.1;
  padding-top: var(--spacing-m);
  text-align: center;
  width: 6em;
  height: 6em;
}

.value {
  font-size: 2em;
  font-weight: var(--font-weight-bold);
}
</style>

<i18n>
{
  "nl": {
    "from": "Vanaf"
  }
}
</i18n>
