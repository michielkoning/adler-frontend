<template>
  <div>
    <app-button type="submit" :is-full-width="true">
      {{ $t('bookNow') }}
    </app-button>
    <app-modal :title="title">
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
}
</script>
