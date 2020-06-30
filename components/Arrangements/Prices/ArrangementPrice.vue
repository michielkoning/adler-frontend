<template>
  <tr v-if="label">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <td v-html="label" />
    <td :class="$style.price">
      {{ $n(price.value, 'currency') | currency }}
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    price: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    label() {
      if (this.price.extraNight) {
        const persons = this.$tc('nights', this.price.extraNight)
        return this.$t('extraNight', { persons })
      } else if (this.price.nights) {
        const nights = this.$tc('nights', this.price.nights)
        const adults = this.$tc('adults', this.price.adults)
        const kids = this.$tc('kids', this.price.kids)
        return `${nights}: ${adults} & ${kids}`
      } else if (this.price.label) {
        return this.price.label
      }
      return ''
    },
  },
}
</script>

<style lang="postcss" module>
.price {
  font-weight: var(--font-weight-bold);
  text-align: right;
  width: 5em;
}
</style>

<i18n>
{
  "nl": {
    "persons": "0 personen | 1 persoon | {count} personen",
    "nights": "0 nachten | 1 nacht | {count} nachten",
    "adults": "0 volwassenen | 1 volwassene | {count} volwassenen",
    "kids": "0 kinderen | 1 kind | {count} kinderen",
    "extraNight": "Extra nacht voor {persons}"
  },
  "de": {
    "persons": "0 Personen | 1 Person | {count} Personen",
    "nights": "0 Nächte | 1 Nacht | {count} Nächte",
    "adults": "0 Erwachsene | 1 Erwachsene | {count} Erwachsene",
    "kids": "0 Kinder | 1 Kind | {count} Kinder",
    "extraNight": "Extra Nacht für {persons}"
  },
  "en": {
    "persons": "0 persons | 1 person | {count} persons",
    "nights": "0 nights | 1 night | {count} nights",
    "adults": "0 adults | 1 adult | {count} adults",
    "kids": "0 children | 1 child | {count} children",
    "extraNight": "Extra night for {persons}"
  }
}
</i18n>
