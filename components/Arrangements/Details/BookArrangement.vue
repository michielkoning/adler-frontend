<template>
  <book-now :title="$t('requestNow')" @trigger="toggleModal">
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
