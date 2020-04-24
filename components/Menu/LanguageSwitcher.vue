<template>
  <div>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :class="$style.link"
      :to="generateLocalePath(locale.code)"
    >
      <icon-flag-nl
        v-if="locale.code === 'nl'"
        width="32"
        height="24"
        aria-hidden="true"
      />
      <icon-flag-de
        v-if="locale.code === 'de'"
        width="32"
        height="24"
        aria-hidden="true"
      />
      <icon-flag-en
        v-if="locale.code === 'en'"
        width="32"
        height="24"
        aria-hidden="true"
      />
      <span :class="$style['title']">
        {{ locale.name }}
      </span>
    </nuxt-link>
  </div>
</template>

<script>
import IconFlagNl from '~/icons/flag-nl.svg'
import IconFlagDe from '~/icons/flag-de.svg'
import IconFlagEn from '~/icons/flag-en.svg'
import { replacePlaceholder } from '~/helpers/i18n'

export default {
  components: {
    IconFlagNl,
    IconFlagDe,
    IconFlagEn,
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    generateLocalePath(code) {
      return this.switchLocalePath(code).replace(replacePlaceholder, '')
    },
  },
}
</script>

<style lang="postcss" module>
.link {
  @mixin link-reset;

  display: block;

  @media (--navigation-md) {
    display: inline;
  }
}

.title {
  @media (--navigation-md) {
    @mixin sr-only;
  }
}
</style>
