<script lang="ts" setup>
import type { TypedSchema } from 'vee-validate'

const props = defineProps<{
  name: string
  btnText?: string
  validationSchema: TypedSchema
}>()

const { start, finish } = useLoadingIndicator()

const { values, handleSubmit } = useForm({
  name: props.name,
  validationSchema: props.validationSchema,
})

const url = useRequestURL()

const { execute, status } = await useFetch('/api/form', {
  method: 'POST',
  watch: false,
  immediate: false,
  body: {
    ...values,
    'form-name': props.name,
    'page': url,
  },
  onRequest: start,
  onResponse: finish,
})

const onSubmit = handleSubmit(() => {
  execute()
})
</script>

<template>
  <p v-if="status === 'success'">
    {{ $t("form.success") }}
  </p>
  <form
    v-else
    :action="url.href"
    data-netlify="true"
    netlify-honeypot="bot-field"
    method="POST"
    :name="name"
    novalidate
    @submit="onSubmit"
  >
    <p>{{ $t("form.intro") }}</p>
    <slot />
    <input
      id="bot-field"
      :title="$t('form.botField')"
      class="bot-field"
    >
    <app-button
      type="submit"
      :is-full-width="true"
      class="btn"
      :title="btnText ?? $t('form.submit')"
      size="large"
    />
  </form>
</template>

<style lang="css" scoped>
  .bot-field {
    display: none;
  }
</style>
