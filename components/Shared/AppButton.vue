<template>
  <component
    :is="tag"
    class="btn"
    :type="generatedType"
    :to="to"
    :class="cssClasses"
    :href="href"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script>
import AppLoader from "~/components/Shared/AppLoader.vue";

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
      default: "button",
      validator(value) {
        return ["nuxt-link", "a", "button"].includes(value);
      },
    },
    type: {
      type: String,
      default: "button",
    },
    href: {
      type: String,
      default: null,
    },
    buttonStyle: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "ghost"].includes(value);
      },
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return ["small", "medium", "large"].includes(value);
      },
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssClasses() {
      const classes = [this.$style.btn];
      classes.push(this.$style[`btn-${this.buttonStyle}`]);
      if (this.isFullWidth) classes.push(this.$style["btn-full"]);
      if (this.size === "small") classes.push(this.$style[`btn-small`]);
      if (this.size === "large") classes.push(this.$style[`btn-large`]);
      return classes;
    },
    tag() {
      if (this.href) {
        return "a";
      }
      if (this.to) {
        return "nuxt-link";
      }
      return this.buttonTag;
    },
    generatedType() {
      if (this.tag === "button") {
        return this.type;
      }
      return null;
    },
  },
};
</script>

<style lang="postcss" module>
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
