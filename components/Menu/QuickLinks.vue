<template>
  <div>
    <h2>{{ $t("usefulLinks") }}</h2>

    <ul class="list">
      <li class="list-item">
        <nuxt-link-locale :to="{ name: 'index' }">
          {{ $t(`pages.home`) }}
        </nuxt-link-locale>
      </li>

      <li class="list-item">
        <nuxt-link-locale :to="'/kinderhotel-bregenzerwald'">
          {{ $t(`pages.hotel`) }}
        </nuxt-link-locale>
      </li>
      <li class="list-item">
        <nuxt-link-locale :to="{ name: 'arrangements-list' }">
          {{ $t(`pages.arrangements`) }}
        </nuxt-link-locale>
      </li>
      <li class="list-item">
        <nuxt-link-locale :to="{ name: 'rooms-list' }">
          {{ $t(`pages.rooms`) }}
        </nuxt-link-locale>
      </li>
      <li class="list-item">
        <nuxt-link-locale :to="{ name: 'posts-list' }">
          {{ $t(`pages.posts`) }}
        </nuxt-link-locale>
      </li>
      <li class="list-item">
        <nuxt-link-locale :to="{ name: 'contact' }">
          {{ $t(`pages.contact`) }}
        </nuxt-link-locale>
      </li>
      <li class="list-item">
        <nuxt-link-locale :to="{ name: 'privacy' }">
          {{ $t(`pages.privacy`) }}
        </nuxt-link-locale>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.list {
  @mixin list-reset;

  & > .list-item {
    margin-bottom: var(--spacing-xxs);
  }
}
</style>
