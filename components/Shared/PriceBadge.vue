<template>
  <div v-if="price" class="price-badge">
    <div class="label">{{ $t('from') }}</div>
    <div class="value">{{ $n(price, 'currency') }}</div>
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

<style lang="postcss" scoped>
.price-badge {
  font-family: var(--font-family-header);
  background-color: var(--color-2);
  border-radius: 50%;
  color: var(--color-white);
  height: 6em;
  line-height: 1.1;
  margin-top: -3em;
  padding-top: 1em;
  position: absolute;
  right: -0.5em;
  text-align: center;
  top: 50%;
  width: 6em;
}

.label {
  font-size: 1rem;
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
