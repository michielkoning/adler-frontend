<script lang="ts" setup>
withDefaults(defineProps<{
  show?: boolean
  title: string
}>(), {
  show: false
})

defineEmits(['close'])

</script>

<template>
  <dialog :open="show" class="dialog">
      <!-- <div class="backdrop" /> -->
      <!-- <div class="modal">
        <div class="wrapper">
          <header class="header">
            <h1 class="title" v-html="title" />
            <button class="close" type="button" @click="$emit('close')">
              <span class="sr-only">{{ $t('close') }}</span>
              <app-icon icon="close" aria-hidden="true" width="24" height="24" />
            </button>
          </header>        
          <div class="content"> -->
           <slot />
          <!-- </div>
        </div>
      </div> -->
  </dialog>
</template>

<style lang="postcss" scoped>
.dialog {
  background: var(--color-white);

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
  }
}

.modal {
  position: relative;
  z-index: var(--z-modal);
}

.notch {
  padding: var(--notch-top) var(--notch-right) 0 var(--notch-left);
}

.wrapper {
  max-width: var(--container-width-md);
  margin: 3em auto 8em;
}

.large {
  max-width: var(--container-width-lg);
}

.header {
  display: flex;
  align-items: self-start;
  border-bottom: 1px solid var(--color-gray);
  padding: var(--spacing-s) var(--gutter);
  background: var(--color-white);
}

.close {
  margin-top: var(--spacing-xxs);

  &:hover,
  &:focus {
    background: var(--color-gray-light);
  }
}

.content {
  background: var(--color-white);
  padding: var(--spacing-s) var(--gutter) var(--gutter);
}

.title {
  flex: 1 1 auto;
  padding-right: var(--spacing-xxs);
  margin-bottom: 0;
}
</style>
