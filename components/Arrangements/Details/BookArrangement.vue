<template>
  <book-now :title="$t('btn')" @trigger="toggleModal">
    <app-modal :show="showModal" :title="title" @close="toggleModal">
      <form-arrangement :title="title" />
    </app-modal>
  </book-now>
</template>

<script>
import BookNow from '~/components/Shared/BookNow.vue'
import AppModal from '~/components/Shared/AppModal.vue'
import FormArrangement from '~/components/Forms/FormArrangement.vue'

export default {
  components: {
    BookNow,
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

<i18n>
{
  "nl": {
    "btn": "Nu aanvragen"
  },
  "de": {
    "btn": "Jetzt anfragen"
  },
  "en": {
    "btn": "Book now"
  }
}
</i18n>
