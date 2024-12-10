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

  <app-modal
    :show="showModal"
    :large="true"
    :title="$t('bookNow')"
    @close="toggleModal"
  >
    <div>test</div>
  </app-modal>
</template>
