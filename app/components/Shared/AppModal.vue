<script lang="ts" setup>
withDefaults(
  defineProps<{
    show?: boolean
    title: string
    size?: 'small' | 'large'
  }>(),
  {
    show: false,
    size: 'small',
  },
)

const emit = defineEmits(['close'])

const isHidden = ref(false)

const dialog = useTemplateRef('dialog')

onMounted(() => {
  if (dialog.value) {
    dialog.value.showModal()
  }
})

const close = () => {
  isHidden.value = true
}

const afterClosing = () => {
  if (isHidden.value && dialog.value) {
    isHidden.value = false
    dialog.value.close()
    emit('close')
  }
}
</script>

<template>
  <dialog
    ref="dialog"
    class="dialog"
    :class="{ 'large': size === 'large', 'is-hidden': isHidden }"
    @animationend="afterClosing"
  >
    <header class="header">
      <h1
        class="title"
        v-html="title"
      />
      <button
        class="close"
        type="button"
        @click="close"
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
.dialog {
  width: calc(100% - (var(--gutter) * 2));
  max-width: var(--container-width-md);
  padding: 0;
  margin-top: 3em;
  background: var(--color-white);
  border: 0;

  &::backdrop {
    background-color: rgb(0 0 0 / 50%);
  }

  &.large {
    max-width: var(--container-width-lg);
  }

  &[open] {
    animation: show-dialog var(--transition);

    &::backdrop {
      animation: show-backdrop var(--transition);
    }
  }

  &.is-hidden {
    animation: hide-dialog var(--transition);

    &::backdrop {
      animation: hide-backdrop var(--transition);
    }
  }
}

.notch {
  padding: var(--notch-top) var(--notch-right) 0 var(--notch-left);
}

.header {
  display: flex;
  align-items: self-start;
  padding: var(--spacing-s) var(--gutter);
  border-bottom: 1px solid var(--color-gray);
}

.close {
  margin-top: var(--spacing-xxs);

  &:hover,
  &:focus {
    background: var(--color-gray-light);
  }
}

.icon {
  width: 1.5em;
}

.content {
  padding: var(--spacing-s) var(--gutter) var(--gutter);
}

.title {
  flex: 1 1 auto;
  padding-right: var(--spacing-xxs);
  margin-bottom: 0;
}

@keyframes show-dialog {
  from {
    opacity: 0;
    translate: 0 -0.5em;
  }

  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes hide-dialog {
  to {
    opacity: 0;
    translate: 0 -0.5em;
  }
}

@keyframes show-backdrop {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes hide-backdrop {
  to {
    opacity: 0;
  }
}
</style>
