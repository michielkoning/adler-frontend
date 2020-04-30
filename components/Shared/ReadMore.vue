<template>
  <span :class="$style['read-more']" aria-hidden="true">
    {{ $t('readMore') }}
  </span>
</template>

<style lang="postcss" module>
.read-more {
  @mixin btn;
  @mixin btn-primary;
  @mixin btn-small;

  &:hover {
    @mixin btn-primary-hover;
  }
}
</style>

<i18n>
{
  "nl": {
    "readMore": "Lees verder"
  },
  "de": {
    "readMore": "Mehr Info"
  },
  "en": {
    "readMore": "Read more"
  }
}
</i18n>
