<template>
  <div>
    <h2>{{ $t('title') }}</h2>

    <ul :class="$style.list">
      <li :class="$style['list-item']">
        <nuxt-link :to="localePath('/')">
          {{ $t(`home`) }}
        </nuxt-link>
      </li>

      <li :class="$style['list-item']">
        <nuxt-link :to="localePath('/kinderhotel-bregenzerwald')">
          {{ $t(`hotel`) }}
        </nuxt-link>
      </li>
      <li :class="$style['list-item']">
        <nuxt-link :to="localePath({ name: 'arrangements' })">
          {{ $t(`arrangements`) }}
        </nuxt-link>
      </li>
      <li :class="$style['list-item']">
        <nuxt-link :to="localePath({ name: 'rooms' })">
          {{ $t(`rooms`) }}
        </nuxt-link>
      </li>
      <li :class="$style['list-item']">
        <nuxt-link :to="localePath({ name: 'blog' })">
          {{ $t(`blog`) }}
        </nuxt-link>
      </li>
      <li :class="$style['list-item']">
        <nuxt-link :to="localePath({ name: 'contact' })">
          {{ $t(`contact`) }}
        </nuxt-link>
      </li>
      <li :class="$style['list-item']">
        <nuxt-link :to="localePath({ name: 'privacy' })">
          {{ $t(`privacy`) }}
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
  }
}
</i18n>
