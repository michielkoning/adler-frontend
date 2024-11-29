<script lang="ts" setup>
withDefaults(defineProps<{
  title: string
  name: string
  type?: 'text' | 'email' | 'tel'
}>(), {
  type: 'text'
})

const model = defineModel({ required: true })

defineOptions({
  inheritAttrs: false
})

const id = useId();

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <form-field :id="id" :title="title">
    <input
      :id="id"
      :name="name"
      v-bind="$attrs"
      v-model="model"
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
