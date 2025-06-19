<template>
  <app-badge
    v-if="price"
    :prefix="$t('from')"
    :text="$n(price, 'currency') | currency"
  />
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
