<script lang="ts" setup>
defineProps<{
  url?: string;
  title: string;
}>();

const showModal = ref(false);

const toggleModal = (state: boolean) => {
  showModal.value = state;
};
</script>

<template>
  <app-button
    :title="$t('bookNow')"
    size="large"
    class="btn-book-now"
    @click="toggleModal(true)"
  />

  <app-modal
    v-if="showModal"
    :title="title"
    size="large"
    @close="toggleModal(false)"
  >
    <easy-booking-frame :url="url" />
  </app-modal>
</template>
