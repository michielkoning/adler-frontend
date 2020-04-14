<template>
  <div>
    <h2>{{ $t('title') }}</h2>

    <ul :class="$style.list">
      <li :class="$style['list-item']">
        <nuxt-link :to="localePath('/')">
          {{ $t(`pages.home`) }}
        </nuxt-link>
      </li>

      <li :class="$style['list-item']">
        <nuxt-link :to="localePath('/kinderhotel-bregenzerwald')">
          {{ $t(`pages.hotel`) }}
        </nuxt-link>
      </li>
      <li :class="$style['list-item']">
        <nuxt-link :to="localePath({ name: 'arrangements' })">
          {{ $t(`pages.arrangements`) }}
        </nuxt-link>
      </li>
      <li :class="$style['list-item']">
        <nuxt-link :to="localePath({ name: 'rooms' })">
          {{ $t(`pages.rooms`) }}
        </nuxt-link>
      </li>
      <li :class="$style['list-item']">
        <nuxt-link :to="localePath({ name: 'blog' })">
          {{ $t(`pages.blog`) }}
        </nuxt-link>
      </li>
      <li :class="$style['list-item']">
        <nuxt-link :to="localePath({ name: 'contact' })">
          {{ $t(`pages.contact`) }}
        </nuxt-link>
      </li>
      <li :class="$style['list-item']">
        <nuxt-link :to="localePath({ name: 'privacy' })">
          {{ $t(`pages.privacy`) }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" module>
.list {
  @mixin list-reset;

  & > .list-item {
    margin-bottom: var(--spacing-xxs);
  }
}
</style>

<i18n>
{
  "nl": {
    "title": "Handige links"
  },
  "de": {
    "title": "PLACEHOLDER"
  },
  "en": {
    "title": "Useful links"
  }
}
</i18n>
