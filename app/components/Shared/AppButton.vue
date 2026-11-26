<script lang="ts" setup>
import type { NuxtLinkProps } from '#app'

const props = withDefaults(
  defineProps<
    NuxtLinkProps & {
      type?: 'submit' | 'button'
      variant?: 'primary' | 'ghost'
      size?: 'small' | 'medium' | 'large'
      isFullWidth?: boolean
      title: string
      icon?: string
    }
  >(),
  {
    variant: 'primary',
    size: 'medium',
    type: 'button',
    isFullWidth: false,
    icon: undefined,
  },
)

const component = computed(() => {
  if (props.to) {
    return resolveComponent('NuxtLinkLocale')
  }
  else {
    return 'button'
  }
})

const cssClasses = computed(() => {
  const classes = ['btn']
  classes.push(`btn-${props.variant}`)
  if (props.isFullWidth) classes.push('btn-full')
  if (props.size === 'small') classes.push('btn-small')
  if (props.size === 'large') classes.push('btn-large')
  return classes
})
</script>

<template>
  <component
    :is="component"
    :to="to"
    :class="cssClasses"
    :type="component === 'button' ? type : undefined"
  >
    <app-icon
      v-if="icon"
      :icon
      class="icon"
    />
    {{ title }}
  </component>
</template>

<style lang="css" scoped>
.btn {
  @mixin btn;

  display: inline-flex;
  gap: var(--spacing-1);
  align-items: center;
}

.btn-small {
  @mixin btn-small;
}

.btn-large {
  @mixin btn-large;
}

.btn-full {
  @mixin btn-full;
}

.btn-primary {
  @mixin btn-primary;

  &.active,
  &:hover,
  &:focus-visible {
    @mixin btn-primary-hover;
  }
}

.btn-ghost {
  @mixin btn-ghost;

  &.active,
  &:hover,
  &:focus-visible {
    @mixin btn-ghost-hover;
  }
}
</style>
