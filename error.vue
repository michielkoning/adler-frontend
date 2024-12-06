<script lang="ts" setup>
import type { NuxtError } from "nuxt/app";

defineProps<{
  error: NuxtError;
}>();

</script>

<template>
  <nuxt-layout>
    <the-page title="sad" text="ad">
      <dev-only>
        <pre>{{ JSON.parse(error.data) }}</pre>
      </dev-only>
  </the-page>
  </nuxt-layout>
</template>
