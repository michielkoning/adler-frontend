<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import z from 'zod'

const { t } = useI18n()

const validationSchema = toTypedSchema(
  z.object({
    email: z.email({ error: t('form.error.email.incorrect') }).default(''),
    phone: z
      .string().default(''),
    message: z
      .string()
      .min(1, { error: t('form.error.required') }).default(''),
  }),
)
</script>

<template>
  <app-form
    :validation-schema="validationSchema"
    name="contact"
    toolname="contact"
    tooldescription="Submit a question"
  >
    <form-fieldset :title="$t('form.formContact')">
      <form-input-text
        name="name"
        toolparamdescription="Name"
        :title="$t('form.name')"
        autocomplete="name"
      />

      <form-input-text
        name="email"
        :title="$t('form.email')"
        type="email"
        toolparamdescription="Email address"
        autocomplete="email"
      />
      <form-input-text
        name="phone"
        toolparamdescription="Phone number"
        :title="$t('form.phoneNumber')"
        type="tel"
        autocomplete="tel"
      />
      <form-textarea
        toolparamdescription="Message"
        name="message"
        :title="$t('form.message')"
        rows="4"
      />
    </form-fieldset>
  </app-form>
</template>
