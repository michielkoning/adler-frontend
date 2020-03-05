<template>
  <app-page :title="title">
    <the-intro :text="error.message" />
  </app-page>
</template>

<script>
import TheIntro from '~/components/Shared/TheIntro.vue'
import AppPage from '~/components/Layout/AppPage.vue'

export default {
  components: {
    TheIntro,
    AppPage,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },

  computed: {
    title() {
      if (this.error.statusCode === 404) {
        return 'Pagina niet gevonden'
      }
      return 'An error occurred'
    },
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
