<template>
  <div :class="$style.page">
    <vue-announcer />
    <the-header />
    <main>
      <nuxt />
    </main>

    <the-footer />
    <error-handler />
    <cookie-wall />
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
}
</script>

<script>
import TheHeader from '~/components/Layout/TheHeader.vue'
import TheFooter from '~/components/Layout/TheFooter.vue'
import ErrorHandler from '~/components/Layout/ErrorHandler.vue'
import CookieWall from '~/components/Layout/CookieWall.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    ErrorHandler,
    CookieWall,
  },
  head() {
    return this.$nuxtI18nSeo()
  },
}
</script>

<style lang="postcss" module>
.page {
  background: var(--color-background);
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
