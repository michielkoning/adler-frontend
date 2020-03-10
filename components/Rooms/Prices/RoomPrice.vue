<template>
  <div :class="$style.price">
    <div :class="$style.label">{{ title }}</div>
    <div :class="$style.value">
      {{ $n(price, 'currency') }}
    </div>
    <div :class="$style.suffix">{{ $t('suffix') }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "suffix": "per pers & nacht"
  }
}
</i18n>

<style lang="postcss" module>
.price {
  background: var(--color-gray);
  border-radius: 0.25em;
  color: var(--color-white);
  text-align: center;
  padding: var(--spacing-s) var(--spacing-xs);
  display: flex;
  flex-direction: column;
}

.label {
  flex: 1 1 auto;
}

.suffix,
.value {
  font-family: var(--font-family-header);
  font-weight: var(--font-weight-bold);
}

.value {
  font-size: 2em;
  line-height: 1.3;
}
</style>
