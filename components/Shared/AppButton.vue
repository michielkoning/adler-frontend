<template>
  <component
    :is="tag"
    class="btn"
    :type="generatedType"
    :to="to"
    :class="cssClasses"
    :href="href"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script>
import AppLoader from '~/components/Shared/AppLoader.vue'

export default {
  components: {
    AppLoader,
  },
  props: {
    to: {
      type: String,
      default: null,
    },
    buttonTag: {
      type: String,
      default: 'button',
      validator(value) {
        return ['nuxt-link', 'a', 'button'].includes(value)
      },
    },
    type: {
      type: String,
      default: 'button',
    },
    href: {
      type: String,
      default: null,
    },
    buttonStyle: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'ghost'].includes(value)
      },
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      },
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssClasses() {
      const classes = [this.$style.btn]
      classes.push(this.$style[`btn-${this.buttonStyle}`])
      if (this.isFullWidth) classes.push(this.$style['btn-full'])
      if (this.size === 'small') classes.push(this.$style[`btn-small`])
      if (this.size === 'large') classes.push(this.$style[`btn-large`])
      return classes
    },
    tag() {
      if (this.href) {
        return 'a'
      }
      if (this.to) {
        return 'nuxt-link'
      }
      return this.buttonTag
    },
    generatedType() {
      if (this.tag === 'button') {
        return this.type
      }
      return null
    },
  },
}
</script>

<style lang="postcss" module>
.btn {
  @mixin btn;

  &:disabled {
    background: transparent;
    color: var(--color-white);
    border: 2px dashed var(--color-white);

    &.active,
    &:hover {
      background: transparent;
    }
  }
}

.btn-full {
  max-width: none;
  width: 100%;
}

.btn-small {
  font-size: var(--font-size-sm);
  padding: var(--spacing-xxs) var(--spacing-xs);
  font-weight: var(--font-weight-normal);
}

.btn-large {
  font-size: var(--font-size-l);
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
