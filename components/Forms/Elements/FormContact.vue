<script lang="ts" setup>
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const formData = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const rules = {
  name: { required },
  email: { required, email },
};

const v$ = useVuelidate(rules, formData);
</script>

<template>
  <form-fieldset :title="$t('title')">
    {{ formData }}
    <form-input-text
      v-model="formData.name"
      name="name"
      :title="$t('form.name')"
      autocomplete="name"
    />
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
