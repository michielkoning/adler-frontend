<template>
  <div>
    <app-button type="submit" :is-full-width="true">
      {{ $t('bookNow') }}
    </app-button>
    <app-modal :title="title">
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
}
</script>
