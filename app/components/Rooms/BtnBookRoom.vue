<script lang="ts" setup>
withDefaults(
  defineProps<{
    url?: string
    title?: string
    size?: 'small' | 'large'
  }>(),
  {
    url: undefined,
    title: undefined,
    size: 'large',
  },
)
</script>

<template>
  <div>
    <app-button
      :title="$t('bookNow')"
      :size="size"
      commandfor="room"
      command="show-modal"
    />

    <app-modal
      id="room"
      :title="title ?? $t('bookNow')"
      size="large"
    >
      <easy-booking-frame :url="url" />
    </app-modal>
  </div>
</template>
