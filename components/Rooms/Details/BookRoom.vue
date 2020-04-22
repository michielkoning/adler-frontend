<template>
  <book-now @trigger="toggleModal">
    <app-modal
      :show="showModal"
      :large="true"
      :title="title"
      @close="toggleModal"
    >
      <iframe height="600" width="1000" loading="lazy" :src="bookUrl"></iframe>
    </app-modal>
  </book-now>
</template>

<script>
import AppModal from '~/components/Shared/AppModal.vue'
import BookNow from '~/components/Shared/BookNow.vue'

export default {
  components: {
    AppModal,
    BookNow,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    bookUrl: {
      type: String,
      required: true,
    },
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
