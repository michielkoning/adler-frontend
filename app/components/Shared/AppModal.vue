<script lang="ts" setup>
withDefaults(
  defineProps<{
    id: string
    show?: boolean
    title: string
    size?: 'small' | 'large'
  }>(),
  {
    size: 'small',
  },
)
</script>

<template>
  <dialog
    :id
    :class="size"
    class="gallery-dialog"
    closedby="any"
  >
    <header class="header">
      <h1
        class="title"
        v-html="title"
      />
      <button
        class="btn-close"
        :commandfor="id"
        command="close"
      >
        <span class="sr-only">{{ $t("close") }}</span>
        <app-icon
          icon="fa6-solid:xmark"
          class="icon"
        />
      </button>
    </header>
    <div class="content">
      <slot />
    </div>
  </dialog>
</template>

<style lang="css" scoped>
dialog {
  inline-size: calc(100vw - (var(--spacing-m) * 2));
  max-inline-size: var(--container-width-lg);
  padding: 0;
  background-color: var(--color-background);
  border: 0;
  transition: display var(--transition) allow-discrete, overlay var(--transition) allow-discrete;
  animation: dialog-hide var(--transition);

  &[open] {
    animation: dialog-show var(--transition);

    &::backdrop {
      animation: backdrop-show var(--transition);
    }
  }

  &.small {
    max-inline-size: var(--container-width-md);
  }
}

.btn-close {
  font-size: 2em;
  cursor: pointer;
}

::backdrop {
  background-color: rgb(0 0 0 / 50%);
  backdrop-filter: blur(0.25em);
  animation: backdrop-hide var(--transition);
}

.header {
  inset-block-start: 0;
  display: flex;
  gap: var(--spacing-s);
  align-items: start;
  justify-content: space-between;
  padding: var(--spacing-s) var(--spacing-m) 0;
  border-bottom: 1px solid var(--color-gray);
}

.content {
  padding: var(--spacing-m);
}

@keyframes dialog-hide {
  from {
    opacity: 1;
    translate: 0 0;
  }

  to {
    opacity: 0;
    translate: 0 -1em;
  }
}

@keyframes dialog-show {
  from {
    opacity: 0;
    translate: 0 -1em;
  }

  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes backdrop-show {
  from {
    opacity: 0;
    backdrop-filter: blur(0);
  }

  to {
    opacity: 1;
    backdrop-filter: blur(0.25em);
  }
}

@keyframes backdrop-hide {
  from {
    opacity: 1;
    backdrop-filter: blur(0.25em);
  }

  to {
    opacity: 0;
    backdrop-filter: blur(0);
  }
}
</style>
