<template>
  <div>
    <app-button :is-full-width="true" @click="toggleModal">
      {{ $t('bookNow') }}
    </app-button>
    <app-modal
      :show="showModal"
      :large="true"
      :title="title"
      @close="toggleModal"
    >
      <iframe height="600" width="1000" loading="lazy" :src="bookUrl"></iframe>
    </app-modal>
  </div>
</template>

<script>
import AppButton from '~/components/Shared/AppButton.vue'
import AppModal from '~/components/Shared/AppModal.vue'

export default {
  components: {
    AppButton,
    AppModal,
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
