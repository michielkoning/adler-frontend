<script lang="ts" setup>
import type { LastMinute } from "~/types/LastMinute";

defineProps<LastMinute>();

const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<template>
  <book-now :title="$t('requestNow')" @trigger="toggleModal">
    <app-modal v-if="showModal" :title="$t('requestNow')" @close="toggleModal">
      <!-- <form-last-minute v-if="lastMinute" :last-minute="lastMinute" /> -->
    </app-modal>
  </book-now>
</template>
