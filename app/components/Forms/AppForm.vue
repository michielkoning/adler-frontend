<script lang="ts" setup>
import type { TypedSchema } from 'vee-validate'
import type { AsyncDataRequestStatus } from '#app'

const props = defineProps<{
  name: string
  btnText?: string
  validationSchema: TypedSchema
}>()

const { start, finish } = useLoadingIndicator()

const { values, handleSubmit, setValues } = useForm({
  name: props.name,
  validationSchema: props.validationSchema,
})

const url = useRequestURL()

const status: Ref<AsyncDataRequestStatus> = ref('idle')

setValues({
  email: 'mail@michielkoning.nl',
  phone: '061223456678',
  message: 'test van michiel',
})

const onSubmit = handleSubmit(async () => {
  start()
  status.value = 'pending'
  await $fetch(url.pathname, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: {
      ...values,
      'form-name': props.name,
      'page': url.href,
    },
  }).then(() => {
    status.value = 'success'
  }).catch(() => {
    status.value = 'error'
  }).finally(finish)
})
</script>

<template>
  <p v-if="status === 'success'">
    {{ $t("form.success") }}
  </p>
  <form
    :action="url.href"
    data-netlify="true"
    netlify-honeypot="bot-field"
    method="POST"
    :name="name"
    novalidate
    @submit.prevent="onSubmit"
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
