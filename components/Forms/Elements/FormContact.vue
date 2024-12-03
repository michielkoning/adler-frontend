<script lang="ts" setup>
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { object, string } from "zod";

const formData = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const validationSchema = toTypedSchema(
  object({
    email: string()
      .min(1, { message: "This is required" })
      .email({ message: "Must be a valid email" })
      .default("mich@asasc.com"),
    password: string().min(1, { message: "This is required" }).default("asds"),
  }),
);

const { handleSubmit, errors, defineField } = useForm({
  validationSchema,
});

const [email, emailProps] = defineField("email", {
  validateOnModelUpdate: false,
});
const { value: password } = useField("password", {
  validateOnModelUpdate: false,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <form-fieldset :title="$t('title')">
    <form :validation-schema="validationSchema" @submit="onSubmit">
      {{ email }}
      <input v-model="email" name="email" type="email" v-bind="emailProps" />
      <span>{{ errors.email }}</span>

      <input v-model="password" name="password" type="password" />
      <span>{{ errors.password }}</span>
      <form-input-text
        v-model="email"
        name="email"
        :title="$t('form.email')"
        type="email"
        autocomplete="email"
        v-bind="emailProps"
      />
      {{ emailProps }}
      <button>Submit</button>
    </form>

    <!-- <div v-if="v$.formData.$error">Name field has an error.</div> -->
    <form-input-text
      v-model="formData.email"
      name="email"
      :title="$t('form.email')"
      type="email"
      autocomplete="email"
    />
    <form-input-text
      v-model="formData.phone"
      name="phone"
      :title="$t('form.phoneNumber')"
      type="tel"
      autocomplete="tel"
    />
    <!-- <form-textarea
      id="message"
      v-model.trim="formData.message"
      :error-message="errorMessageMessage"
      :title="$t('form.message')"
      rows="4"
      type="message"
    /> -->
  </form-fieldset>
</template>

<i18n>
{
  "nl": {
    "title": "Neem contact met ons op",
    "btnText": "Verzenden"
  },
  "de": {
    "title": "Nehmen Sie Kontakt mit uns auf",
    "btnText": "Senden"
  },
  "en": {
    "title": "Contact us",
    "btnText": "Send"
  }
}
</i18n>
