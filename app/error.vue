<script lang="ts" setup>
import type { NuxtError } from "nuxt/app";

defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <nuxt-layout>
    <the-page :title="error.statusMessage">
      <dev-only>
        <pre>{{ error.data }}</pre>
      </dev-only>
    </the-page>
  </nuxt-layout>
</template>
