<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/zod";
import z from "zod";

const validationSchema = toTypedSchema(
  z.object({
    email: z
      .string()
      .min(1, { message: "This is required" })
      .email({ message: "Must be a valid email" })
      .default(""),
    phone: z.string().default(""),
    message: z.string().default(""),
  }),
);
</script>

<template>
  <app-form :validation-schema="validationSchema" name="contact">
    <form-fieldset :title="$t('form.formContact')">
      <form-input-text
        name="email"
        :title="$t('form.email')"
        type="email"
        autocomplete="email"
      />

      <form-input-text
        name="phone"
        :title="$t('form.phoneNumber')"
        type="tel"
        autocomplete="tel"
      />
      <form-textarea name="message" :title="$t('form.message')" rows="4" />
    </form-fieldset>
  </app-form>
</template>
