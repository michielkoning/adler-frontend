<template>
  <div>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :class="$style.link"
      :to="generateLocalePath(locale.code)"
      @click.native="changePage"
    >
      <icon-flag-nl
        v-if="locale.code === 'nl'"
        :class="$style['icon']"
        width="32"
        height="24"
        aria-hidden="true"
      />
      <icon-flag-de
        v-if="locale.code === 'de'"
        :class="$style['icon']"
        width="32"
        height="24"
        aria-hidden="true"
      />
      <icon-flag-en
        v-if="locale.code === 'en'"
        :class="$style['icon']"
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
import EventBusUtil from '~/utils/eventBusUtil'

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
    changePage() {
      if (!this.isSmallScreen) return
      EventBusUtil.$emit('header-close-mobile-menu')
    },
    isSmallScreen() {
      return window.innerWidth < 768
    },
  },
}
</script>

<style lang="postcss" module>
.link {
  @mixin link-reset;

  margin-bottom: var(--spacing-xxs);
  display: flex;
  align-items: center;

  @media (--navigation-md) {
    display: inline;
    margin-bottom: 0;
  }
}

.title {
  box-shadow: 0 1px 0 0 currentColor;
  margin-left: var(--spacing-xs);

  @nest .link:hover &, .link:focus & {
    box-shadow: 0 2px 0 0 currentColor;
  }

  @media (--navigation-md) {
    @mixin sr-only;
  }
}
</style>
