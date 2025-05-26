<script lang="ts" setup>
import type { ArrangementPrice } from "~/types/Arangement";

const props = defineProps<{
  price: ArrangementPrice;
}>();

const { t } = useI18n();

const label = computed(() => {
  if (props.price.extra_night) {
    return t("extraNight", {
      persons: t("persons", props.price.extra_night),
    });
  } else if (props.price.nights) {
    const nights = t("nights", props.price.nights);
    const adults = t("adults", props.price.adults);
    const kids = t("kids", props.price.kids);
    return `${nights}: ${adults} & ${kids}`;
  } else {
    return props.price.label;
  }
});
</script>

<template>
  <tr>
    <td v-html="label" />
    <td class="price">
      {{ $n(price.value, "currency") }}
    </td>
  </tr>
</template>

<style lang="postcss" scoped>
.price {
  font-weight: var(--font-weight-bold);
  text-align: right;
  width: 5em;
}
</style>
