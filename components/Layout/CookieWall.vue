<template>
  <animation-fade-in>
    <div v-if="!accepted" :class="$style['cookie-wall']">
      <notch-wrapper>
        <div :class="$style.wrapper">
          <div :class="$style.text">
            {{ $t('info.part1') }}
            <nuxt-link :to="localePath({ name: 'privacy' })">
              {{ $t('info.part2') }} </nuxt-link
            >.
          </div>
          <app-button :is-large="false" @click="confirm">{{
            $t('confirm')
          }}</app-button>
        </div>
      </notch-wrapper>
    </div>
  </animation-fade-in>
</template>

<script>
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import AppButton from '~/components/Shared/AppButton.vue'
import AnimationFadeIn from '~/components/Animations/FadeIn.vue'

export default {
  components: {
    NotchWrapper,
    AppButton,
    AnimationFadeIn,
  },
  data() {
    return {
      accepted: true,
      key: 'cookieWall',
    }
  },
  watch: {
    $route() {
      this.accepted = true
    },
  },
  created() {
    if (process.client) {
      this.accepted = localStorage.getItem(this.key)
      localStorage.setItem(this.key, true)
    }
  },
  methods: {
    confirm() {
      this.accepted = true
      localStorage.setItem(this.key, true)
    },
  },
}
</script>

<style lang="postcss" module>
.cookie-wall {
  color: var(--color-white);
  background: var(--color-gray-dark);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid var(--color-white);
}

.wrapper {
  display: flex;
  align-items: self-start;
  padding: var(--spacing-xs) 0 var(--spacing-l);
}

.text {
  flex: 1 1 auto;
  padding: var(--spacing-xxs) var(--spacing-xxs) 0 0;
}
</style>

<i18n>
{
  "nl": {
    "confirm": "Akkoord",
    "info": {
      "part1": "Door deze website verder te bezoeken, gaat u akkoord met het plaatsen van cookies. Bekijk voor meer informatie onze",
      "part2": "privacybeleid"
    }
  },
  "de": {
    "confirm": "Akzeptieren",
    "info": {
      "part1": "Durch die Verwendung dieser Seite erklären Sie sich einverstanden, dass diese Website Cookies verwendet. Mehr Info dazu in unserer",
      "part2": "Datenschutzerklärung"
    }
  },
  "en": {
    "confirm": "Accept",
    "info": {
      "part1": "By continuing to visit this website, you agree to the placement of cookies. For more information, see our",
      "part2": "privacy policy"
    }
  }
}
</i18n>
