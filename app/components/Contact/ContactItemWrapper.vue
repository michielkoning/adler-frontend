<script lang="ts" setup>
defineProps<{
  icon: 'phone' | 'envelope'
  title: string
  url: string
}>()
</script>

<template>
  <nuxt-link
    :href="url"
    external
    class="contact-item"
  >
    <app-icon
      :icon="`fa6-solid:${icon}`"
      class="icon"
    />
    <span class="title">
      {{ title }}
    </span>
  </nuxt-link>
</template>

<style scoped>
.contact-item {
  display: flex;
  margin-bottom: var(--spacing-xxs);
  gap: var(--spacing-s);
}

.icon {
  flex: 0 0 1em;
  translate: 0 0.1em;
}
</style>
