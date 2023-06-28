<template>
  <form-wrapper
    :btn-text="$t('btnText')"
    :form-data="formData"
    name="lastMinutes"
    :valid="!$v.$invalid"
    @validate="validate"
  >
    <input
      v-model="formData.lastMinuteTitle"
      type="text"
      name="lastMinutesTitle"
    />
    <input
      v-model="formData.lastMinuteRoom"
      type="text"
      name="lastMinutesRoom"
    />
    <input
      v-model="formData.lastMinutePrices"
      type="text"
      name="lastMinutesPrice"
    />
    <input
      v-model="formData.lastMinuteDateFrom"
      type="text"
      name="lastMinutesDateFrom"
    />
    <input
      v-model="formData.lastMinuteDateUntil"
      type="text"
      name="lastMinutesDateUntil"
    />
    <input
      v-model="formData.lastMinutePersons"
      type="text"
      name="lastMinutesAdults"
    />
    <form-fieldset :title="$t('addressData')" class="addresses">
      <form-input-text
        id="name"
        v-model.trim.lazy="$v.formData.$model.name"
        :class="$style.name"
        :error-message="errorMessageName"
        :title="$t('form.name')"
        autocomplete="name"
      />
      <form-input-text
        id="address"
        v-model.trim.lazy="$v.formData.address.$model"
        :class="$style.address"
        :error-message="errorMessageAddress"
        :title="$t('form.address')"
        autocomplete="street-address"
      />
      <form-input-text
        id="zipcode"
        v-model.trim.lazy="$v.formData.zipcode.$model"
        :class="$style.zipcode"
        :error-message="errorMessageZipcode"
        :title="$t('form.zipcode')"
        autocomplete="postal-code"
      />
      <form-input-text
        id="city"
        v-model.trim.lazy="$v.formData.city.$model"
        :class="$style.city"
        :error-message="errorMessageCity"
        :title="$t('form.city')"
        autocomplete="locality"
      />
      <form-input-text
        id="country"
        v-model.trim.lazy="$v.formData.country.$model"
        :class="$style.country"
        :error-message="errorMessageCountry"
        :title="$t('form.country')"
        autocomplete="country"
      />
      <form-input-text
        id="phone"
        v-model="formData.phone"
        :class="$style['phone-number']"
        :title="$t('form.phoneNumber')"
        type="tel"
        autocomplete="tel"
      />
      <form-input-text
        id="email"
        v-model.trim.lazy="$v.formData.email.$model"
        :class="$style.email"
        :error-message="errorMessageEmail"
        :title="$t('form.email')"
        type="email"
        autocomplete="email"
      />
    </form-fieldset>
    <form-fieldset :title="$t('familyData')" class="totals">
      <form-input-text
        id="totalRooms"
        v-model.trim.lazy="$v.formData.totalRooms.$model"
        :error-message="errorMessageTotalRooms"
        :title="$t('form.totalRooms')"
        type="number"
      />
      <form-input-text
        id="totalAdults"
        v-model.trim.lazy="$v.formData.totalAdults.$model"
        :error-message="errorMessageTotalAdults"
        :title="$t('form.totalAdults')"
        type="number"
      />
      <form-input-text
        id="totalChildren"
        v-model.trim.lazy="$v.formData.totalChildren.$model"
        :error-message="errorMessageTotalChildren"
        :title="$t('form.totalChildren')"
        type="number"
      />
      <form-input-text
        id="ageChildren"
        v-model="formData.ageChildren"
        :title="$t('form.ageChildren')"
      />
    </form-fieldset>

    <form-fieldset :title="$t('remarks')">
      <form-textarea
        id="remarks"
        v-model="formData.remarks"
        :title="$t('form.remarks')"
        rows="4"
        type="remarks"
      />
    </form-fieldset>
  </form-wrapper>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
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
    lastMinute: {
      type: Object,
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
        ageChildren: '',
        remarks: '',
        lastMinuteTitle: '',
        lastMinuteRoom: '',
        lastMinutePrices: '',
        lastMinuteDateFrom: '',
        lastMinuteDateUntil: '',
        lastMinutePersons: '',
      },
    }
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
  },
  mounted() {
    this.formData.lastMinutePrices = this.lastMinute.lastMinute.prices
      .map((p) => {
        return p.price
      })
      .join(' - ')
    this.formData.lastMinutePersons = this.lastMinute.lastMinute.prices
      .map((p) => {
        return `${p.kids} Kinder ${p.adults} Erwachsene`
      })
      .join(' - ')
    this.formData.lastMinuteTitle = this.lastMinute.title
    if (this.lastMinute.lastMinute.room) {
      this.formData.lastMinuteRoom = this.lastMinute.lastMinute.room.title
    }
    this.formData.lastMinuteDateFrom = this.lastMinute.lastMinute.dates.dateFrom
    this.formData.lastMinuteDateUntil =
      this.lastMinute.lastMinute.dates.dateUntill
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
      },
      totalAdults: {
        required,
      },
      totalChildren: {
        required,
      },
      email: {
        required,
        email,
      },
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
    addLeadingZero(value) {
      if (value < 10) {
        return '0' + value
      }
      return value
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '~/styles/media-queries/media-queries.css';

@media (--viewport-xs) {
  .addresses /deep/ .fields {
    grid-template-columns: repeat(4, 1fr);
  }

  .totals /deep/ .fields {
    grid-template-columns: repeat(2, 1fr);
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
    "btnText": "Aanvragen",
    "addressData": "Adresgegevens",
    "familyData": "Bezoekerssamenstelling",
    "dates": "Data",
    "remarks": "Opmerkingen"
  },
  "de": {
    "btnText": "Anfragen",
    "addressData": "Adressinformationen",
    "familyData": "Besucherkomposition",
    "dates": "Daten",
    "remarks": "Bemerkungen"
  },
  "en": {
    "btnText": "Book",
    "addressData": "Address data",
    "familyData": "Visitor composition",
    "dates": "Dates",
    "remarks": "Remarkt"
  }
}
</i18n>
