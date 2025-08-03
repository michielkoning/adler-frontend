<script lang="ts" setup>
import type { LastMinute } from "~/types/LastMinute";

defineProps<LastMinute>();

const showModal = ref(false);

const toggleModal = (state: boolean) => {
  showModal.value = state;
};
</script>

<template>
  <book-now :title="$t('requestNow')" @trigger="toggleModal(true)" />

  <app-modal
    v-if="showModal"
    :title="$t('requestNow')"
    @close="toggleModal(false)"
  >
    <!-- <form-last-minute v-if="lastMinute" :last-minute="lastMinute" /> -->
  </app-modal>
</template>
