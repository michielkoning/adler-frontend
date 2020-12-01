<template>
  <book-now :title="$t('btn')" @trigger="toggleModal">
    <app-modal :show="showModal" :title="title" @close="toggleModal">
      <form-arrangement :title="title" />
    </app-modal>
  </book-now>
</template>

<script>
export default {
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
