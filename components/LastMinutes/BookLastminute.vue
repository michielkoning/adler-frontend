<template>
  <book-now :title="$t('requestNow')" @trigger="toggleModal">
    <app-modal :show="showModal" :title="$t('requestNow')" @close="toggleModal">
      <form-last-minute v-if="lastMinute" :last-minute="lastMinute" />
    </app-modal>
  </book-now>
</template>

<script>
export default {
  props: {
    lastMinute: {
      type: Object,
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
