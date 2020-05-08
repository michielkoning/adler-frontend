<template>
  <div class="page">
    <link
      href="https://fonts.googleapis.com/css2?family=Abel&family=Biryani:wght@300&family=Dosis:wght@300&family=Roboto:wght@300;400&display=swap"
      rel="stylesheet"
    />

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

<style lang="postcss" scoped>
.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
