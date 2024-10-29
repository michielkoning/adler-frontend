<template>
  <tr v-if="label">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <td v-html="label" />
    <td :class="$style.price">
      <!-- {{ $n(price.value, "currency") | currency }} -->
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
        const persons = this.$tc("persons", this.price.extraNight);
        return this.$t("extraNight", { persons });
      } else if (this.price.nights) {
        const nights = this.$tc("nights", this.price.nights);
        const adults = this.$tc("adults", this.price.adults);
        const kids = this.$tc("kids", this.price.kids);
        return `${nights}: ${adults} & ${kids}`;
      } else if (this.price.label) {
        return this.price.label;
      }
      return "";
    },
  },
};
</script>

<style lang="postcss" module>
.price {
  font-weight: var(--font-weight-bold);
  text-align: right;
  width: 5em;
}
</style>
