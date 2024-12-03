<script lang="ts" setup>
defineProps<{
  errorMessage?: string;
}>()
</script>

<template>
  <span aria-live="assertive">{{ errorMessage }}</span>
</template>
