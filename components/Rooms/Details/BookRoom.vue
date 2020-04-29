<template>
  <book-now @trigger="toggleModal">
    <app-modal
      :show="showModal"
      :large="true"
      :title="title"
      @close="toggleModal"
    >
      <easy-booking-frame v-if="showModal" :url="bookUrl" />
    </app-modal>
  </book-now>
</template>

<script>
import AppModal from '~/components/Shared/AppModal.vue'
import BookNow from '~/components/Shared/BookNow.vue'
import EasyBookingFrame from '~/components/Shared/EasyBookingFrame.vue'

export default {
  components: {
    AppModal,
    BookNow,
    EasyBookingFrame,
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
