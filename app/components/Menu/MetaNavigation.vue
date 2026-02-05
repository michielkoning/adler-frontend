<script lang="ts" setup>
const localePath = useLocalePath()
</script>

<template>
  <nav
    :aria-label="$t('metaNavigationTitle')"
    class="meta-navigation"
  >
    <h2
      id="secondary-menu-title"
      class="sr-only"
    >
      {{ $t("metaNavigationTitle") }}
    </h2>

    <div class="contact">
      <contact-phone-number class="contact-item contact-item-phone-number" />
      <contact-emailaddress class="contact-item contact-item-emailaddress" />
    </div>

    <language-switcher class="language-switcher" />
    <div class="buttons">
      <app-button
        :title="$t('pages.lastMinutes')"
        :to="{
          name: 'last-minutes',
        }"
        size="small"
        variant="ghost"
      />
      <app-button
        v-if="$i18n.locale === 'de'"
        :title="$t('vouchers')"
        size="small"
        to="https://www.gurado.de/adler-lingenau/geschenkgutscheine.html"
        variant="ghost"
        external
      />

      <btn-book-room
        size="small"
        class="btn-book-now"
      />
    </div>
  </nav>
</template>

<style lang="css" scoped>
  @import "~/assets/css/media-queries/media-queries.css";

  .meta-navigation {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding-bottom: 8em;

    @media (--show-full-navigation) {
      flex-direction: row;
      gap: 1.5em;
      align-items: center;
      padding: var(--spacing-s) var(--spacing-m);
      background: var(--color-background-alternative);
    }
  }

  .contact {
    @media (--navigation-md) {
      display: flex;
      flex-direction: row;
      gap: 1em;
    }
  }

  .buttons {
    display: flex;
    gap: 0.5em;
  }

  .language-switcher {
    @media (--navigation-md) {
      transform: translateY(0.15em);
    }
  }

  .btn-book-now {
    display: none;

    @media (--navigation-lg) {
      display: block;
    }
  }

  .contact-item {
    @media (--navigation-md) {
      transform: translateY(0.15em);
    }

    & a {
      @mixin link-sm;
    }
  }
</style>
