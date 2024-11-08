<script lang="ts" setup>
import type { NuxtError } from "nuxt/app";

defineProps<{
  error: NuxtError;
}>();

</script>

<template>
  <nuxt-layout>
    <dev-only>
      <pre>{{ JSON.parse(error.data) }}</pre>
    </dev-only>
  </nuxt-layout>
</template>
