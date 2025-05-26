<script lang="ts" setup>
import { useField } from "vee-validate";

const props = withDefaults(
  defineProps<{
    title: string;
    name: string;
    type?: "text" | "email" | "tel" | "date" | "number";
    class?: string;
  }>(),
  {
    type: "text",
    class: "",
  },
);

defineOptions({
  inheritAttrs: false,
});

const id = useId();

const name = toRef(props, "name");

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const {
  value: inputValue,
  handleBlur,
  handleChange,
} = useField(name, undefined);
</script>

<template>
  <form-field :id="id" :title="title" :name="name" :class="class">
    <input
      :id="id"
      :name="name"
      v-bind="$attrs"
      :value="inputValue"
      :type="type"
      class="field"
      @input="handleChange"
      @blur="handleBlur"
    />
  </form-field>
</template>

<style lang="postcss" scoped>
.field {
  @mixin form-field;
}
</style>
