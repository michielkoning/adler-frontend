<script lang="ts" setup>
import { useField,  ErrorMessage as oaaa } from 'vee-validate';

const props = withDefaults(defineProps<{
  title: string
  name: string
  type?: 'text' | 'email' | 'tel'
}>(), {
  type: 'text'
})

defineOptions({
  inheritAttrs: false
})

const id = useId();

const name = toRef(props, 'name');

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const {
  value: inputValue,
  handleBlur,
  handleChange,
} = useField(name, undefined);
</script>

<template>
  <form-field :id="id" :title="title" :name="name">
    <textarea
      :id="id"
      :name="name"
      v-bind="$attrs"
      @input="handleChange"
      @blur="handleBlur"
      :type="type"
      class="field"
    >{{  inputValue }}
    </textarea>
  </form-field>
</template>

<style lang="postcss" scoped>
.field {
  @mixin form-field;
}
</style>
