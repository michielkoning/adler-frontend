<script lang="ts" setup>
import type { LastMinute } from '~~/shared/types/LastMinute'

defineProps<LastMinute>()
</script>

<template>
  <book-now
    :title="$t('requestNow')"
    commandfor="book-now"
    command="show-modal"
  />

  <app-modal
    id="book-now"
    :title="$t('requestNow')"
  >
    <!-- <form-last-minute v-if="lastMinute" :last-minute="lastMinute" /> -->
  </app-modal>
</template>
