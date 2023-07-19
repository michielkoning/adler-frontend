<template>
  <div v-if="prices && prices.length">
    <h2>{{ $t('prices') }}</h2>
    <table>
      <tbody>
        <arrangement-price
          v-for="(price, index) in prices"
          :key="index"
          :price="price"
        />
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

<i18n>
{
  "nl": {
    "disclaimer": "Vermelde prijzen zijn prijzen van de totale voor het pakket, exclusief toeristenbelasting."
  },
  "de": {
    "disclaimer": "Die genannten Preise sind die Gesamtpreise für das Arrangement exkl. Kurtaxe."
  },
  "en": {
    "disclaimer": "Displayed prices are pices of the total package, excluding tourist tax."
  }
}
</i18n>
