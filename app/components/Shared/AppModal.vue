<script lang="ts" setup>
withDefaults(
  defineProps<{
    id: string
    title: string
    size?: 'small' | 'large'
  }>(),
  {
    size: 'small',
  },
)

const dialog = useTemplateRef('dialog')

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
})

onMounted(() => {
  watch(
    isOpen,
    (value) => {
      if (!dialog.value) {
        throw new Error('Dialog element does not exist')
      }
      if (value) {
        dialog.value.showModal()
      }
      else if (dialog.value.open) {
        dialog.value.close()
      }
    },
    {
      immediate: true,
    },
  )
})
</script>

<template>
  <dialog
    :id
    ref="dialog"
    :class="size"
    closedby="any"
    @close="isOpen = false"
  >
    <header>
      <h1
        v-html="title"
      />
      <button
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
  inline-size: calc(100vw - (var(--spacing-4) * 2));
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

button {
  font-size: 2em;
  cursor: pointer;
}

::backdrop {
  background-color: rgb(0 0 0 / 50%);
  backdrop-filter: blur(0.25em);
  animation: backdrop-hide var(--transition);
}

header {
  inset-block-start: 0;
  display: flex;
  gap: var(--spacing-3);
  align-items: start;
  justify-content: space-between;
  padding: var(--spacing-3) var(--spacing-4) 0;
  border-block-end: 1px solid var(--color-gray);
}

.content {
  padding: var(--spacing-4);
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
