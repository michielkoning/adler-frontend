<script lang="ts" setup>
import type { NuxtError } from 'nuxt/app'

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <nuxt-layout>
    <center-wrapper>
      <h1>{{ error.statusText }}</h1>
    </center-wrapper>
    <dev-only>
      <pre>{{ error.data }}</pre>
    </dev-only>
  </nuxt-layout>
</template>
