<template>
  <div v-if="price" :class="$style['price-badge']">
    <div :class="$style.label">{{ $t('from') }}</div>
    <div :class="$style.value">
      {{ $n(price, 'currency') | currency }}
    </div>
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
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-headings);
  background-color: var(--color-gray-darker);
  border-radius: 50%;
  color: var(--color-white);
  line-height: var(--line-height-headings);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6em;
  height: 6em;
}

.value {
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
}

.decimal,
.fraction {
  display: none;
}
</style>

<i18n>
{
  "nl": {
    "from": "Vanaf"
  },
  "de": {
    "from": "Ab"
  },
  "en": {
    "from": "From"
  }
}
</i18n>
