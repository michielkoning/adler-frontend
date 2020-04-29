<template>
  <nav
    aria-labelledby="secondary-menu-title"
    :class="$style['meta-navigation']"
  >
    <h2 id="secondary-menu-title" class="sr-only">
      {{ $t('title') }}
    </h2>

    <contact-phone-number
      :class="[$style['contact-item'], $style['contact-item-phone-number']]"
    />
    <contact-emailaddress
      :class="[$style['contact-item'], $style['contact-item-emailaddress']]"
    />

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
.meta-navigation {
  padding-bottom: 8em;

  @media (--navigation-md) {
    display: flex;
    align-items: center;
    padding: var(--spacing-s) var(--spacing-m);
    background: var(--color-4);
  }
}

.language-switcher {
  margin-top: var(--spacing-m);

  @media (--navigation-md) {
    transform: translateY(0.15em);
    margin: 0 0 0 var(--spacing-l);
  }
}

.btn-book-now {
  display: none;
  margin-left: 2em;

  @media (--navigation-lg) {
    display: block;
  }
}

.contact-item-emailaddress {
  @media (--navigation-md) {
    margin-left: 1em;
  }
}

.contact-item {
  @media (--navigation-md) {
    transform: translateY(0.15em);
  }

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
