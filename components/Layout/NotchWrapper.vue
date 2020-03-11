<template>
  <div :class="$style.notch">
    <div :class="$style.wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss" module>
.notch {
  padding: var(--notch);
}

.wrapper {
  max-width: var(--container-width-xlg);
  width: 100%;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  margin: 0 auto;
}
</style>
