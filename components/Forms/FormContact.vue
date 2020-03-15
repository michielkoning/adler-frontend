<template>
  <sitebar-item-section id="contact" :title="$t('title')">
    <form-wrapper
      :intro="$t('intro')"
      :btn-text="$t('btnText')"
      :form-data="formData"
      name="contact"
      :success-message="$t('successMessage')"
      :valid="!$v.$invalid"
      @validate="validate"
    >
      <form-fieldset :title="$t('title')">
        <form-input-text
          id="name"
          v-model.trim.lazy="$v.formData.name.$model"
          :error-message="errorMessageName"
          :title="$t('form.name')"
          type="text"
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
          v-model="formData.phonenumber"
          :title="$t('form.phoneNumber')"
          name="phone"
        />
        <form-textarea
          id="message"
          v-model.trim="formData.message"
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
        message: '',
        phonenumber: '',
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
    },
  },
  computed: {
    errorMessageName() {
      if (this.$v.formData.name.$anyError) {
        if (!this.$v.formData.name.required) {
          return this.$t('form.error.general.required', {
            field: this.$t('form.name').toLowerCase(),
          })
        }
      }
      return null
    },
    errorMessageEmail() {
      if (this.$v.formData.email.$anyError) {
        if (!this.$v.formData.email.required) {
          return this.$t('form.error.general.required', {
            field: this.$t('form.email').toLowerCase(),
          })
        }

        if (!this.$v.formData.email.email)
          return this.$t('form.error.email.email')
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

<style lang="postcss" module>
.bot-field {
  display: none;
}
</style>

<i18n>
{
  "nl": {
    "title": "Neem contact met ons op",
    "intro": "Vul het formulier in met uw gegevens. Wij zullen u zo spoedig mogelijk benaderen.",
    "successMessage": "Het formulier is verzonden. We nemen zo spoedig mogelijk contact met u op.",
    "btnText": "Verzenden"
  }
}
</i18n>
