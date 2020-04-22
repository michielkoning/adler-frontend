<template>
  <nav aria-labelledby="secondary-menu-title" :class="$style.nav">
    <h2 id="secondary-menu-title" class="sr-only">
      {{ $t('title') }}
    </h2>

    <contact-phone-number :class="$style['contact-item']" />
    <contact-emailaddress :class="$style['contact-item']" />

    <language-switcher :class="$style['language-switcher']" />

    <app-button :is-large="false" @click="toggleModal">
      {{ $t('bookNow') }}
    </app-button>

    <app-modal
      :show="showModal"
      :large="true"
      :title="$t('bookNow')"
      @close="toggleModal"
    >
      <iframe height="600" width="1000" loading="lazy" :src="easyBookingUrl" />
    </app-modal>
  </nav>
</template>

<script>
import AppButton from '~/components/Shared/AppButton.vue'
import AppModal from '~/components/Shared/AppModal.vue'
import { easyBookingUrl } from '~/data/siteDetails'

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
  },
  data() {
    return {
      showModal: false,
      easyBookingUrl,
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
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  background: var(--color-4);
}

.language-switcher {
  margin: 0 2em 0 1em;
  transform: translateY(0.15em);
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
