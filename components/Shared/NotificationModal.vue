<template>
  <div v-if="content">
    <app-modal :show="showModal" :title="content.title" @close="toggleModal">
      <div class="content">
        <img :src="content.image.sizes.large" alt="" />
        <div>
          <p v-if="content.text">
            {{ content.text }}
          </p>
          <app-button v-if="content.btn.to" :href="content.btn.to">
            {{ content.btn.title }}
          </app-button>
        </div>
      </div>
    </app-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: true,
      content: undefined,
    }
  },
  async fetch() {
    const response = await this.$axios.$get(
      `https://api.adler-lingenau.com/wp-json/adler/v1/popup`,
    )

    if (response.activate || !response[this.$i18n.locale].title) {
      return
    }

    this.content = {
      title: response[this.$i18n.locale].title,
      text: response[this.$i18n.locale].text,
      btn: {
        to: response[this.$i18n.locale].link,
        title: response[this.$i18n.locale].link_label,
      },
      image: response.image,
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

.content:has(img) {
  display: grid;
  gap: 1em;

  @media (--viewport-sm) {
    grid-template-columns: 15em auto;
  }
}

img {
  display: block;
  width: 100%;
}
</style>
