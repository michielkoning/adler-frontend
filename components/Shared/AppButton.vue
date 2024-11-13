<script lang="ts" setup>
const props = withDefaults(defineProps<{
  to?: string,
  buttonTag?: string,
  type?: 'submit' | 'button',
  href?: string,
  variant?: 'primary' | 'ghost',
  size?: 'small' | 'medium' | 'large',
  isFullWidth?: boolean,
  title: string
}>(), {
  variant: 'primary',
  size: 'medium',
  type: 'button'
})

const component = computed(() => {
  if (props.to) {
    return resolveComponent('NuxtLinkLocale')
  } else {
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
  <component :is="component" :to="to" :class="cssClasses" :type="component === 'button' ? type : undefined">
    {{ title }}
  </component>
</template>

<style lang="postcss" scoped>
.btn {
  @mixin btn;
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
  &:focus {
    @mixin btn-primary-hover;
  }
}

.btn-ghost {
  @mixin btn-ghost;

  &.active,
  &:hover,
  &:focus {
    @mixin btn-ghost-hover;
  }
}
</style>
