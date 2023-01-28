<template>
  <div :class="$style['contact-item']">
    <div :class="$style.icon">
      <slot name="icon" />
    </div>
    <div :class="$style.link">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss" module>
.contact-item {
  display: flex;
  margin-bottom: var(--spacing-xxs);
}

.icon {
  flex: 0 0 1.5em;
  transform: translateY(0.15em);
}

.link {
  flex: 0 0 auto;
}
</style>
