<template>
  <div class="skip-links">
    <app-button
      class="btn"
      variant="ghost"
      :to="{
        hash: '#content',
      }"
      :title="$t('content')"
    />
    <app-button
      class="btn"
      variant="ghost"
      :to="{
        hash: '#menu',
      }"
      :title="$t('menu')"
    />
  </div>
</template>

<style lang="css" scoped>
.btn {
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

<i18n>
{
  "nl": {
    "content": "Naar hoofdinhoud",
    "menu": "Naar hoofdnavigatie"
  },
  "de": {
    "content": "Zum Hauptinhalt",
    "menu": "Zur Hauptnavigation"
  },
  "en": {
    "content": "To main content",
    "menu": "To main navigation"
  }
}
</i18n>
