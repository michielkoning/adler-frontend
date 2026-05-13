<template>
  <span
    class="read-more"
    aria-hidden="true"
  >
    {{ $t("readMore") }}
  </span>
</template>

<style lang="css" scoped>
.read-more {
  @mixin btn;
  @mixin btn-primary;
  @mixin btn-small;

  &:hover {
    @mixin btn-primary-hover;
  }
}
</style>
