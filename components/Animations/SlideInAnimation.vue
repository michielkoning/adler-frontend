<template>
  <transition name="slide-in">
    <slot />
  </transition>
</template>

<style lang="postcss" scoped>
.slide-in-enter-active,
.slide-in-leave-active {
  transition: translate var(--transition);
}

.slide-in-enter-from,
.slide-in-leave-to {
  translate: 0 -0.5em;
}
</style>
