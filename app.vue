<script lang="ts" setup>
import en from "@vee-validate/i18n/dist/locale/en.json";
import de from "@vee-validate/i18n/dist/locale/de.json";
import nl from "@vee-validate/i18n/dist/locale/nl.json";
import { required, email, min_value, min } from "@vee-validate/rules";
import { configure, defineRule } from "vee-validate";
import { localize, setLocale } from "@vee-validate/i18n";

// Define the rule globally
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("min_value", min_value);

localize({ en, nl, de });

configure({
  generateMessage: localize("nl", {
    names: {
      name: "الاسم",
      age: "السن",
      ageConfirm: "تأكيد السن",
    },
  }),
});

setLocale("nl");
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
