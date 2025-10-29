<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title: string
    name: string
    type?: 'text' | 'email' | 'tel' | 'date' | 'number'
    class?: string
  }>(),
  {
    type: 'text',
    class: '',
  },
)

defineOptions({
  inheritAttrs: false,
})

const id = useId()
const { name } = toRefs(props)

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const { value: inputValue, handleBlur, handleChange, errorMessage } = useField(name, undefined, {
  validateOnValueUpdate: false,
})

const validationListeners = {
  blur: (evt: Event) => handleBlur(evt, true),
  change: handleChange,
  input: (evt: Event) => handleChange(evt, !!errorMessage.value),
}
</script>

<template>
  <form-field
    :id="id"
    :title="title"
    :name="name"
    :class="class"
    :error-message="errorMessage"
  >
    <textarea
      :id="id"
      v-bind="$attrs"
      :value="inputValue"
      :name="name"
      class="field"
      v-on="validationListeners"
    />
  </form-field>
</template>

<style scoped>
  .field {
    @mixin form-field;
  }
</style>
