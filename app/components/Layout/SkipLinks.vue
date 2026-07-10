<template>
  <div class="skip-links">
    <a
      class="btn"
      href="#content"
    >
      {{ $t('skipToContent') }}
    </a>
    <a
      class="btn"
      href="#menu"
    >
      {{ $t('skipToMenu') }}
    </a>
  </div>
</template>

<style lang="css" scoped>
.btn {
  @mixin btn;
  @mixin btn-ghost;

  &:not(:focus-within) {
    @mixin sr-only;
  }

  &:focus-within {
    position: fixed;
    inset-block-start: var(--gutter);
    inset-inline-start: var(--gutter);
    z-index: var(--z-skip-links);
  }
}
</style>
