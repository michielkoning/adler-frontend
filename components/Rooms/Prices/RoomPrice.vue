<script lang="ts" setup>
defineProps<{
  title: string;
  price: number
}>()
</script>


<template>
  <div class="price">
    <div class="label">{{ title }}</div>
    <div class="value">
      {{ $n(price, 'currency') }}
    </div>
    <div class="suffix">{{ $t('suffix') }}</div>
  </div>
</template>


<style lang="postcss" scoped>
.price {
  background: var(--color-gray);
  border-radius: 0.25em;
  color: var(--color-white);
  text-align: center;
  padding: var(--spacing-s) var(--spacing-xs);
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-xs);
}

.label {
  flex: 1 1 auto;
}

.suffix,
.value {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-headings);
}

.value {
  font-size: var(--font-size-xxxl);
  line-height: var(--line-height-headings);
}
</style>

<i18n>
{
  "nl": {
    "suffix": "per pers & nacht"
  },
  "de": {
    "suffix": "pro Pers. & Nacht"
  },
  "en": {
    "suffix": "per person & night"
  }
}
</i18n>
