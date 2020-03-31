<template>
  <div>
    <h2>{{ $t('prices') }}</h2>
    <table>
      <tbody>
        <tr v-for="(price, index) in prices" :key="index">
          <td>{{ price.label }}</td>
          <td :class="$style.price">{{ $n(price.value, 'currency') }}</td>
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
      type: Object,
      default: () => {},
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
    "disclaimer": "Vermelde prijzen zijn prijzen van de totale voor het pakket, inclusief toeristenbelasting."  }
}
</i18n>
