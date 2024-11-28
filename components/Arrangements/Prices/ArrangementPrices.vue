<script lang="ts" setup>
import type { ArrangementPrices } from '~/types/Arangement';

defineProps<{
prices: ArrangementPrices
}>()
</script>

<template>
  <div>
    <h2>{{ $t("prices") }}</h2>
    <table>
      <tbody>
          <arrangement-price
          v-for="price in prices" :key="price.label"
          :price="price"
        />

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

