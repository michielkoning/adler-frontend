<script lang="ts" setup>
defineProps<{
  icon: 'phone' | 'envelope',
  title: string,
  url: string
}>()

</script>

<template>
  <nuxt-link :href="url" external class="contact-item">
    <app-icon :icon="icon" class="icon" />
    <span class="title">
    {{ title }}
    </span>
  </nuxt-link>
</template>

<style lang="postcss" scoped>
.contact-item {
  display: inline-flex;
  margin-bottom: var(--spacing-xxs);
  gap: var(--spacing-xs);
}

.icon {
  flex: 0 0 1.5em;
  transform: translateY(0.15em);
}

.link {
  flex: 0 0 auto;
}
</style>
