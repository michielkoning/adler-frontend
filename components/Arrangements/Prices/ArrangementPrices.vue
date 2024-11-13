<template>
  <div v-if="prices && prices.length">
    <h2>{{ $t("prices") }}</h2>
    <table>
      <tbody>
        <tr v-for="price in prices" :key="price.label">
          <td>{{ price.label }}</td>
          <i18n-d value="price.value" format="currency" />
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">
            {{ $t("arrangementDisclaimer") }}
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
};
</script>
