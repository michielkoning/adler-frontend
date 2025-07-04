<script lang="ts" setup>
defineProps<{
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

  <app-modal v-if="showModal" :title="title" @close="toggleModal(false)">
    <form-book-arrangement :title="title" />
  </app-modal>
</template>
