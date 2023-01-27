<script setup lang="ts">
  defineI18nRoute({
    paths: {
      en: "/",
      nl: "/",
      de: "/",
    },
  });
</script>

<template>
  <h1>{{ $t("prices") }}</h1>
</template>
