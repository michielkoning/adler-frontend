<template>
  <form-wrapper
    :intro="$t('intro')"
    :btn-text="$t('btnText')"
    :form-data="formData"
    name="arrangement"
    :valid="!$v.$invalid"
    @validate="validate"
  >
    <input type="hidden" name="arrangement" :value="title" />
    <form-fieldset :title="$t('addressData')" class="addresses">
      <form-input-text
        id="name"
        v-model.trim.lazy="$v.formData.$model.name"
        :class="$style.name"
        :error-message="errorMessageName"
        :title="$t('form.name')"
        name="name"
      />
      <form-input-text
        id="address"
        v-model.trim.lazy="$v.formData.address.$model"
        :class="$style.address"
        :error-message="errorMessageAddress"
        :title="$t('form.address')"
        name="address"
      />
      <form-input-text
        id="zipcode"
        v-model.trim.lazy="$v.formData.zipcode.$model"
        :class="$style.zipcode"
        :error-message="errorMessageZipcode"
        :title="$t('form.zipcode')"
        name="zipcode"
      />
      <form-input-text
        id="city"
        v-model.trim.lazy="$v.formData.city.$model"
        :class="$style.city"
        :error-message="errorMessageCity"
        :title="$t('form.city')"
        name="city"
      />
      <form-input-text
        id="country"
        v-model.trim.lazy="$v.formData.country.$model"
        :class="$style.country"
        :error-message="errorMessageCountry"
        :title="$t('form.country')"
        name="country"
      />
      <form-input-text
        id="phone"
        v-model="formData.phone"
        :class="$style['phone-number']"
        :title="$t('form.phoneNumber')"
        type="tel"
        name="phone"
      />
      <form-input-text
        id="email"
        v-model="formData.email"
        :class="$style.email"
        :error-message="errorMessageEmail"
        :title="$t('form.email')"
        type="email"
        name="email"
      />
    </form-fieldset>
    <form-fieldset :title="$t('familyData')" class="totals">
      <form-input-text
        id="totalRooms"
        v-model.trim.lazy="$v.formData.totalRooms.$model"
        :class="$style.field"
        :error-message="errorMessageTotalRooms"
        :title="$t('form.totalRooms')"
        type="number"
        name="totalRooms"
      />
      <form-input-text
        id="totalAdults"
        v-model.trim.lazy="$v.formData.totalAdults.$model"
        :class="$style.field"
        :error-message="errorMessageTotalAdults"
        :title="$t('form.totalAdults')"
        type="number"
        name="totalAdults"
      />
      <form-input-text
        id="totalChildren"
        v-model.trim.lazy="$v.formData.totalChildren.$model"
        :class="$style.field"
        :error-message="errorMessageTotalChildren"
        :title="$t('form.totalChildren')"
        type="number"
        name="totalChildren"
      />
    </form-fieldset>

    <form-fieldset :title="$t('dates')" class="dates">
      <form-input-text
        id="dateArrival"
        v-model.trim.lazy="$v.formData.dateArrival.$model"
        :class="$style.date"
        :error-message="errorMessageDateArrival"
        :title="$t('form.dateArrival')"
        type="date"
        name="dateArrival"
      />
      <form-input-text
        id="dateDeparture"
        v-model.trim.lazy="$v.formData.dateDeparture.$model"
        :class="$style.date"
        :error-message="errorMessageDateDeparture"
        :title="$t('form.dateDeparture')"
        name="dateDeparture"
        type="date"
      />
    </form-fieldset>
    <form-fieldset :title="$t('remarks')">
      <form-textarea
        id="remarks"
        v-model.trim="formData.remarks"
        :title="$t('form.remarks')"
        name="remarks"
        rows="4"
        type="remarks"
      />
    </form-fieldset>
  </form-wrapper>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators'
import FormFieldset from '~/components/Forms/Elements/FormFieldset.vue'
import FormInputText from '~/components/Forms/Elements/FormInputText.vue'
import FormTextarea from '~/components/Forms/Elements/FormTextarea.vue'
import FormWrapper from '~/components/Forms/FormWrapper.vue'

export default {
  components: {
    FormFieldset,
    FormInputText,
    FormTextarea,
    FormWrapper,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      formData: {
        name: '',
        address: '',
        zipcode: '',
        city: '',
        country: '',
        phone: '',
        email: '',
        totalRooms: '',
        totalAdults: '',
        totalChildren: '',
        dateArrival: '',
        dateDeparture: '',
        remarks: '',
      },
    }
  },
  validations: {
    formData: {
      name: {
        required,
      },
      address: {
        required,
      },
      zipcode: {
        required,
      },
      city: {
        required,
      },
      country: {
        required,
      },
      totalRooms: {
        required,
        numeric,
      },
      totalAdults: {
        required,
        numeric,
      },
      totalChildren: {
        required,
        numeric,
      },
      dateArrival: {
        required,
      },
      dateDeparture: {
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
    errorMessageAddress() {
      if (this.$v.formData.address.$anyError) {
        if (!this.$v.formData.address.required) {
          return this.$t('form.error.required')
        }
      }
      return null
    },
    errorMessageZipcode() {
      if (this.$v.formData.zipcode.$anyError) {
        if (!this.$v.formData.zipcode.required) {
          return this.$t('form.error.required')
        }
      }
      return null
    },
    errorMessageCity() {
      if (this.$v.formData.city.$anyError) {
        if (!this.$v.formData.city.required) {
          return this.$t('form.error.required')
        }
      }
      return null
    },
    errorMessageCountry() {
      if (this.$v.formData.country.$anyError) {
        if (!this.$v.formData.country.required) {
          return this.$t('form.error.required')
        }
      }
      return null
    },
    errorMessageTotalRooms() {
      if (this.$v.formData.totalRooms.$anyError) {
        if (!this.$v.formData.totalRooms.required) {
          return this.$t('form.error.required')
        }
      }
      return null
    },
    errorMessageTotalAdults() {
      if (this.$v.formData.totalAdults.$anyError) {
        if (!this.$v.formData.totalAdults.required) {
          return this.$t('form.error.required')
        }
      }
      return null
    },
    errorMessageTotalChildren() {
      if (this.$v.formData.totalChildren.$anyError) {
        if (!this.$v.formData.totalChildren.required) {
          return this.$t('form.error.required')
        }
      }
      return null
    },
    errorMessageDateArrival() {
      if (this.$v.formData.dateArrival.$anyError) {
        if (!this.$v.formData.dateArrival.required) {
          return this.$t('form.error.required')
        }
      }
      return null
    },
    errorMessageDateDeparture() {
      if (this.$v.formData.dateDeparture.$anyError) {
        if (!this.$v.formData.dateDeparture.required) {
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
    requiredMessage(field, name) {
      if (!this.$v[field].required) {
        return this.$t('form.error.required')
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
@media (--viewport-xs) {
  .addresses /deep/ .fields {
    grid-template-columns: repeat(4, 1fr);
  }

  .totals /deep/ .fields {
    grid-template-columns: repeat(3, 1fr);
  }
}

.dates /deep/ .fields {
  grid-template-columns: repeat(2, 1fr);
}
</style>

<style lang="postcss" module>
.email,
.zipcode,
.address,
.phone-number,
.city,
.country,
.name {
  grid-column: span 4;
}

@media (--viewport-xs) {
  .address {
    grid-column: span 3;
  }

  .zipcode {
    grid-column: span 1;
  }

  .email,
  .phone-number,
  .city,
  .country {
    grid-column: span 2;
  }
}
</style>

<i18n>
{
  "nl": {
    "intro": "Vul het formulier in met uw gegevens. Wij zullen u zo spoedig mogelijk benaderen.",
    "btnText": "Boeken",
    "addressData": "Adresgegevens",
    "familyData": "Bezoekerssamenstelling",
    "dates": "Data",
    "remarks": "Opmerkingen"
  },
  "de": {
    "intro": "PLACEHOLDER",
    "btnText": "Buchen",
    "addressData": "Adressinformationen",
    "familyData": "Besucherkomposition",
    "dates": "Daten",
    "remarks": "Bemerkungen"
  },
  "en": {
    "intro": "PLACEHOLDER",
    "btnText": "Book",
    "addressData": "Address data",
    "familyData": "Visitor composition",
    "dates": "Dates",
    "remarks": "Remarkt"
  }
}
</i18n>
