<script lang="ts" setup>
withDefaults(
  defineProps<{
    show?: boolean;
    title: string;
    large?: boolean;
  }>(),
  {
    show: false,
    large: false,
  },
);

const emit = defineEmits(["close"]);

const isHidden = ref(false);

const dialog = useTemplateRef("dialog");

onMounted(() => {
  if (dialog.value) {
    dialog.value.showModal();
  }
});

const close = () => {
  isHidden.value = true;
};

const afterClosing = () => {
  if (isHidden.value && dialog.value) {
    isHidden.value = false;
    dialog.value.close();
    emit("close");
  }
};
</script>

<template>
  <dialog
    ref="dialog"
    class="dialog"
    :class="{ large, 'is-hidden': isHidden }"
    @animationend="afterClosing"
  >
    <header class="header">
      <h1 class="title" v-html="title" />
      <button class="close" type="button" @click="close">
        <span class="sr-only">{{ $t("close") }}</span>
        <app-icon icon="fa6-solid:xmark" class="icon" />
      </button>
    </header>
    <div class="content">
      <slot />
    </div>
  </dialog>
</template>

<style lang="postcss" scoped>
.dialog {
  margin-top: 3em;
  background: var(--color-white);
  width: calc(100% - (var(--gutter) * 2));
  max-width: var(--container-width-md);
  border: 0;
  padding: 0;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
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
  border-bottom: 1px solid var(--color-gray);
  padding: var(--spacing-s) var(--gutter);
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
    translate: 0 -0.5em;
    opacity: 0;
  }

  to {
    translate: 0 0;
    opacity: 1;
  }
}

@keyframes hide-dialog {
  to {
    translate: 0 -0.5em;
    opacity: 0;
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
