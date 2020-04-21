<template>
  <sitebar-item-section id="contact" :title="$t('title')">
    <form-wrapper
      :intro="$t('intro')"
      :btn-text="$t('btnText')"
      :form-data="formData"
      name="contact"
      :valid="!$v.$invalid"
      @validate="validate"
    >
      <form-fieldset :title="$t('title')">
        <form-input-text
          id="name"
          v-model.trim.lazy="$v.formData.name.$model"
          :error-message="errorMessageName"
          :title="$t('form.name')"
          name="name"
        />
        <form-input-text
          id="email"
          v-model.trim.lazy="$v.formData.email.$model"
          :error-message="errorMessageEmail"
          :title="$t('form.email')"
          name="email"
          type="email"
        />
        <form-input-text
          id="phone"
          v-model="formData.phone"
          :title="$t('form.phoneNumber')"
          type="tel"
          name="phone"
        />
        <form-textarea
          id="message"
          v-model.trim="formData.message"
          :error-message="errorMessageMessage"
          :title="$t('form.message')"
          name="message"
          rows="4"
          type="message"
        />
      </form-fieldset>
    </form-wrapper>
  </sitebar-item-section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import FormFieldset from '~/components/Forms/Elements/FormFieldset.vue'
import FormInputText from '~/components/Forms/Elements/FormInputText.vue'
import FormTextarea from '~/components/Forms/Elements/FormTextarea.vue'
import FormWrapper from '~/components/Forms/FormWrapper.vue'
import SitebarItemSection from '~/components/Sidebar/SitebarItemSection.vue'

export default {
  components: {
    SitebarItemSection,
    FormFieldset,
    FormInputText,
    FormTextarea,
    FormWrapper,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    }
  },
  validations: {
    formData: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      message: {
        required,
      },
    },
  },
  computed: {
    errorMessageName() {
      if (this.$v.formData.name.$anyError) {
        if (!this.$v.formData.name.required) {
          return this.$t('form.error.required')
        }
      }
      return null
    },
    errorMessageEmail() {
      if (this.$v.formData.email.$anyError) {
        if (!this.$v.formData.email.required) {
          return this.$t('form.error.required')
        }

        if (!this.$v.formData.email.email)
          return this.$t('form.error.email.incorrect')
      }
      return null
    },
    errorMessageMessage() {
      if (this.$v.formData.message.$anyError) {
        if (!this.$v.formData.message.required) {
          return this.$t('form.error.required')
        }
      }
      return null
    },
  },

  methods: {
    validate() {
      this.$v.$touch()
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Neem contact met ons op",
    "intro": "Vul het formulier in met uw gegevens. Wij zullen u zo spoedig mogelijk benaderen.",
    "successMessage": "Het formulier is verzonden. We nemen zo spoedig mogelijk contact met u op.",
    "btnText": "Verzenden"
  },
  "de": {
    "title": "PLACEHOLDER",
    "intro": "PLACEHOLDER",
    "successMessage": "PLACEHOLDER",
    "btnText": "Senden"
  },
  "en": {
    "title": "Contact us",
    "intro": "PLACEHOLDER",
    "successMessage": "PLACEHOLDER",
    "btnText": "Send"
  }
}
</i18n>
