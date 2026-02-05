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

<style lang="css" scoped>
.contact-item {
  display: flex;
  gap: var(--spacing-s);
  margin-bottom: var(--spacing-xxs);
}

.icon {
  flex: 0 0 1.25em;
  translate: 0 0.1em;
}
</style>
