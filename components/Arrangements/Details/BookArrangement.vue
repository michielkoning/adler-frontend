<template>
  <div>
    <app-button :is-full-width="true" @click="toggleModal">
      {{ $t('bookNow') }}
    </app-button>
    <app-modal :show="showModal" :title="title" @close="toggleModal">
      <form-arrangement :title="title" />
    </app-modal>
  </div>
</template>

<script>
import AppButton from '~/components/Shared/AppButton.vue'
import AppModal from '~/components/Shared/AppModal.vue'
import FormArrangement from '~/components/Forms/FormArrangement.vue'

export default {
  components: {
    AppButton,
    AppModal,
    FormArrangement,
  },
  props: {
    title: {
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
