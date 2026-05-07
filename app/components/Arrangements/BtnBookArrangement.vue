<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <app-button
    :title="$t('bookNow')"
    size="large"
    commandfor="arrangement"
    command="show-modal"
  />

  <app-modal
    id="arrangement"
    :title="title"
    size="small"
  >
    <form-book-arrangement :title="title" />
  </app-modal>
</template>
