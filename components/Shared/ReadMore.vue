<template>
  <span class="read-more" aria-hidden="true">
    {{ $t("readMore") }}
  </span>
</template>

<style lang="postcss" scoped>
.read-more {
  @mixin btn;
  @mixin btn-primary;
  @mixin btn-small;

  padding-top: 0.1em;
  padding-bottom: 0.1em;

  &:hover {
    @mixin btn-primary-hover;
  }
}
</style>
