<script lang="ts" setup>
defineProps<{
  price: number;
}>();
</script>

<template>
  <app-badge :prefix="$t('from')" :text="$n(price, 'currency')" />
</template>
