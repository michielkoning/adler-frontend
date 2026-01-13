<script lang="ts" setup>
defineProps<{
  title: string
  price: number
}>()
</script>

<template>
  <div class="price">
    <div class="label">
      {{ title }}
    </div>
    <div class="value">
      {{ $n(price, "currency") }}
    </div>
    <div class="suffix">
      {{ $t("perPersonAndNight") }}
    </div>
  </div>
</template>

<style lang="css" scoped>
.price {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-s) var(--spacing-xs);
  margin-bottom: var(--spacing-xs);
  color: var(--color-white);
  text-align: center;
  background: var(--color-gray);
  border-radius: 0.25em;
}

.label {
  flex: 1 1 auto;
}

.suffix,
.value {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-headings);
}

.value {
  font-size: var(--font-size-xxxl);
  line-height: var(--line-height-headings);
}
</style>
