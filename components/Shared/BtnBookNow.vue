<script lang="ts" setup>
const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<template>
  <app-button
    :title="$t('bookNow')"
    size="small"
    class="btn-book-now"
    @click="toggleModal"
  />

  <app-modal v-if="showModal" :title="$t('bookNow')" @close="toggleModal">
    <form-book-arrangement />
  </app-modal>
</template>
