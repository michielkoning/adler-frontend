<script lang="ts" setup>
import type { Archive } from "~/types/Archive";

defineProps<{
  title: string;
  items: Archive[];
}>();
</script>

<template>
  <sidebar-item-section :title="title">
    <sidebar-item-list :items="items" />
  </sidebar-item-section>
</template>
