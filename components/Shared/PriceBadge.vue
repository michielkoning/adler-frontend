<template>
  <div v-if="price" :class="$style['price-badge']">
    <div :class="$style.label">{{ $t('from') }}</div>
    <div :class="$style.value">
      <i18n-n :value="price" :format="{ key: 'currency' }">
        <template v-slot:decimal="slotProps">
          <span :class="$style.decimal">{{ slotProps.decimal }}</span>
        </template>
        <template v-slot:fraction="slotProps" styles="font-size: small">
          <span :class="$style.fraction">{{ slotProps.fraction }}</span>
        </template>
      </i18n-n>
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
  font-family: var(--font-family-header);
  background-color: var(--color-2);
  border-radius: 50%;
  color: var(--color-white);
  line-height: 1.1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6em;
  height: 6em;
}

.value {
  font-size: 2em;
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
    "from": "PLACEHOLDER"
  },
  "en": {
    "from": "From"
  }
}
</i18n>
