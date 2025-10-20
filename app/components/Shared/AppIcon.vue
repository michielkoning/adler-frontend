<script lang="ts" setup>
  defineProps<{
    icon: string;
  }>();
</script>

<template>
  <nuxt-icon class="icon" :name="icon" />
</template>
