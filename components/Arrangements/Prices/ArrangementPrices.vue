<template>
  <div v-if="prices && prices.length">
    <h2>{{ $t('prices') }}</h2>
    <table>
      <tbody>
        <tr v-for="(price, index) in prices" :key="index">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <td v-html="price.label" />
          <td :class="$style.price">
            {{ $n(price.value, 'currency') | currency }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">
            {{ $t('disclaimer') }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    prices: {
      type: Array,
      default: () => [],
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
    "disclaimer": "Vermelde prijzen zijn prijzen van de totale voor het pakket, inclusief toeristenbelasting."
  },
  "de": {
    "disclaimer": "Die genannten Preise sind die Gesamtpreise für das Arrangement inkl. Kurtaxe."
  },
  "en": {
    "disclaimer": "Displayed prices are pices of the total package, including tourist tax."
  }
}
</i18n>
