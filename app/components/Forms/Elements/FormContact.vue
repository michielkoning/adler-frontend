<script lang="ts" setup>
  import { toTypedSchema } from "@vee-validate/zod";
  import z from "zod";

  const { t } = useI18n();

  const validationSchema = toTypedSchema(
    z.object({
      email: z.email(),
      phone: z
        .string({ message: t("form.error.required") })
        .min(1, { message: t("form.error.required") }),
      message: z
        .string({ message: t("form.error.required") })
        .min(1, { message: t("form.error.required") }),
    })
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
