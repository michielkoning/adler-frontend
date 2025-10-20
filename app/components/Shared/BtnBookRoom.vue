<script lang="ts" setup>
  withDefaults(
    defineProps<{
      url?: string;
      title?: string;
      size?: "small" | "large";
    }>(),
    {
      url: undefined,
      title: undefined,
      size: "large",
    }
  );

  const showModal = ref(false);

  const toggleModal = (state: boolean) => {
    showModal.value = state;
  };
</script>

<template>
  <div>
    <app-button
      :title="$t('bookNow')"
      :size="size"
      @click="toggleModal(true)"
    />

    <app-modal
      v-if="showModal"
      :title="title ?? $t('bookNow')"
      size="large"
      @close="toggleModal(false)"
    >
      <easy-booking-frame :url="url" />
    </app-modal>
  </div>
</template>
