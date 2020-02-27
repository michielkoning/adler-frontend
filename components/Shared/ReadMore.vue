<template>
  <span :class="$style['read-more']" aria-hidden="true">
    {{ $t('readMore') }}
  </span>
</template>

<style lang="postcss" module>
.read-more {
  @mixin link;

  &:hover {
    @mixin link-hover;
  }
}
</style>

<i18n>
{
  "nl": {
    "readMore": "Lees verder"
  }
}
</i18n>
