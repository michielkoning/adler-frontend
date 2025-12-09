<script lang="ts" setup>
import type { TypedSchema } from 'vee-validate'
import { setLocale, localize } from '@vee-validate/i18n'
import { configure } from 'vee-validate'
import en from '@vee-validate/i18n/dist/locale/en.json'
import nl from '@vee-validate/i18n/dist/locale/nl.json'
import de from '@vee-validate/i18n/dist/locale/de.json'

configure({
  generateMessage: localize({
    en,
    de,
    nl,
  }),
})

setLocale('nl')

const props = defineProps<{
  name: string
  btnText?: string
  validationSchema: TypedSchema
}>()

const { start, finish } = useLoadingIndicator()
const route = useRoute()
const appConfig = useAppConfig()

const action = route.fullPath
const currentPage = `${appConfig.baseUrl}${route.fullPath}`

const { values, handleSubmit } = useForm({
  name: props.name,
  validationSchema: props.validationSchema,
})

const { execute, status } = useFetch('/api/form', {
  method: 'POST',
  watch: false,
  immediate: false,
  body: {
    values,
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
    :action="action"
    data-netlify="true"
    netlify-honeypot="bot-field"
    method="POST"
    :name="name"
    novalidate
    @submit="onSubmit"
  >
    <p>{{ $t("form.intro") }}</p>
    <input
      type="hidden"
      name="form-name"
      :value="name"
    >
    <input
      type="hidden"
      name="page"
      :value="currentPage"
    >
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

<style scoped>
  .bot-field {
    display: none;
  }
</style>
