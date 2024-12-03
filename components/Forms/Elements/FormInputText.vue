<script lang="ts" setup>
withDefaults(defineProps<{
  title: string
  name: string
  type?: 'text' | 'email' | 'tel'
  errorMessage?: string
}>(), {
  type: 'text'
})

const model = defineModel({ required: true })

defineOptions({
  inheritAttrs: false
})

const id = useId();

defineEmits(['update:modelValue', 'blur']);
</script>

<template>
  <form-field :id="id" :title="title" :error-message="errorMessage">
    <input
      :id="id"
      :name="name"
      v-bind="$attrs"
      v-model="model"
      @blur="$emit('blur')"
      :type="type"
      class="field"
    />
  </form-field>
</template>

<style lang="postcss" scoped>
.field {
  @mixin form-field;
}
</style>
