<template>
  <nav aria-labelledby="secondary-menu-title" class="meta-navigation">
    <h2 id="secondary-menu-title" class="sr-only">
      {{ $t('title') }}
    </h2>

    <div class="contact">
      <contact-phone-number class="[contact-item contact-item-phone-number]" />
      <contact-emailaddress class="[contact-item contact-item-emailaddress]" />
    </div>

    <language-switcher class="language-switcher" />
    <div class="buttons">
      <app-button
        v-if="hasLastMinutes"
        :to="localePath('last-minutes')"
        size="small"
        button-style="ghost"
        @click.native="changePage"
      >
        {{ $t('lastMinutes') }}
      </app-button>
      <app-button
        v-if="$i18n.locale === 'de'"
        rel="noopener"
        target="_blank"
        size="small"
        href="https://www.gurado.de/adler-lingenau/geschenkgutscheine.html"
        button-style="ghost"
        @click.native="changePage"
      >
        {{ $t('vouchers') }}
      </app-button>

      <app-button size="small" class="btn-book-now" @click="toggleModal">
        {{ $t('bookNow') }}
      </app-button>
    </div>

    <app-modal
      :show="showModal"
      :large="true"
      :title="$t('bookNow')"
      @close="toggleModal"
    >
      <easy-booking-frame />
    </app-modal>
  </nav>
</template>

<script>
import AppButton from '~/components/Shared/AppButton.vue'
import AppModal from '~/components/Shared/AppModal.vue'
import EasyBookingFrame from '~/components/Shared/EasyBookingFrame.vue'
import EventBusUtil from '~/utils/eventBusUtil'

import LanguageSwitcher from '~/components/Menu/LanguageSwitcher.vue'
import ContactEmailaddress from '~/components/Contact/ContactEmailaddress.vue'
import ContactPhoneNumber from '~/components/Contact/ContactPhoneNumber.vue'
export default {
  components: {
    ContactEmailaddress,
    ContactPhoneNumber,
    LanguageSwitcher,
    AppButton,
    AppModal,
    EasyBookingFrame,
  },
  data() {
    return {
      showModal: false,
    }
  },
  computed: {
    hasLastMinutes() {
      const menu = this.$store.getters['menu/getByLanguage'](this.$i18n.locale)
      return menu.lastMinutes.edges.length
    },
  },
  methods: {
    changePage() {
      EventBusUtil.$emit('change-page')
    },

    toggleModal() {
      EventBusUtil.$emit('change-page')
      this.showModal = !this.showModal
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '~/styles/media-queries/media-queries.css';

.meta-navigation {
  padding-bottom: 8em;
  display: flex;
  gap: 1em;
  flex-direction: column;

  @media (--navigation-md) {
    gap: 1.5em;
    flex-direction: row;
    align-items: center;
    padding: var(--spacing-s) var(--spacing-m);
    background: var(--color-background-alternative);
  }
}

.contact {
  display: flex;
  flex-direction: column;

  @media (--navigation-md) {
    gap: 1em;
    flex-direction: row;
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

<i18n>
{
  "nl": {
    "title": "Contact en taalkeuze"
  },
  "de": {
    "title": "Kontakt und Wahl der Sprache"
  },
  "en": {
    "title": "Contact and choice of language"
  }
}
</i18n>
