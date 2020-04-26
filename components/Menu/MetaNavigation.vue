<template>
  <nav aria-labelledby="secondary-menu-title" :class="$style.nav">
    <h2 id="secondary-menu-title" class="sr-only">
      {{ $t('title') }}
    </h2>

    <contact-phone-number :class="$style['contact-item']" />
    <contact-emailaddress :class="$style['contact-item']" />

    <language-switcher :class="$style['language-switcher']" />

    <app-button
      :is-large="false"
      :class="$style['btn-book-now']"
      @click="toggleModal"
    >
      {{ $t('bookNow') }}
    </app-button>

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

<style lang="postcss" module>
.nav {
  padding-bottom: 8em;

  @media (--navigation-md) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    padding: 0.5em 1em;
    background: var(--color-4);
  }
}

.language-switcher {
  transform: translateY(0.15em);

  @media (--navigation-md) {
    margin: 0 2em 0 1em;
  }
}

.btn-book-now {
  display: none;

  @media (--navigation-md) {
    display: block;
  }
}

.contact-item {
  margin-right: 1em;
  transform: translateY(0.15em);

  & a {
    box-shadow: 0 1px 0 0 currentColor;

    &:hover,
    &:focus {
      box-shadow: 0 2px 0 0 currentColor;
    }
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
