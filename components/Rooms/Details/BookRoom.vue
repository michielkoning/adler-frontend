<template>
  <div>
    <app-button type="submit" :is-full-width="true" @click="toggleModal">
      {{ $t('bookNow') }} {{ showModal }}
    </app-button>
    <app-modal v-if="showModal" :title="title">
      <iframe height="600" :src="bookUrl"></iframe>
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
