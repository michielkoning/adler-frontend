<script lang="ts" setup>
import { useField } from "vee-validate";

const props = defineProps<{
  name: string;
}>();

const name = toRef(props, "name");

const { errorMessage } = useField(name, undefined);
</script>

<template>
  <span aria-live="assertive">{{ errorMessage }}</span>
</template>
