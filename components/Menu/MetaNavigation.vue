<template>
  <nav aria-labelledby="secondary-menu-title" class="meta-navigation">
    <h2 id="secondary-menu-title" class="sr-only">
      {{ $t('title') }}
    </h2>

    <contact-phone-number class="[contact-item contact-item-phone-number]" />
    <contact-emailaddress class="[contact-item contact-item-emailaddress]" />

    <language-switcher class="language-switcher" />
    <div class="buttons">
      <app-button size="small" class="btn-book-now" @click="toggleModal">
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
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '~/styles/media-queries/media-queries.css';

.meta-navigation {
  padding-bottom: 8em;

  @media (--navigation-md) {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: var(--spacing-s) var(--spacing-m);
    background: var(--color-background-alternative);
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
