<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import z from 'zod'

const props = defineProps<{
  title: string
}>()

const { t } = useI18n()

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(1, { error: t('form.error.required') }).default(''),
    address: z.string().min(1, { error: t('form.error.required') }).default(''),
    zipcode: z.string().min(1, { error: t('form.error.required') }).default(''),
    city: z.string().min(1, { error: t('form.error.required') }).default(''),
    country: z.string().min(1, { error: t('form.error.required') }).default(''),
    phone: z.string().min(1, { error: t('form.error.required') }).default(''),
    email: z.email({ error: t('form.error.email.incorrect') }).default(''),
    totalRooms: z.number().min(1).default(1),
    totalAdults: z.number().min(1).default(1),
    totalChildren: z.number().min(1).default(1),
    ageChildren: z.string().default(''),
    remarks: z.string().default(''),
    title: z.literal(props.title).default(props.title),
  }),
)

const id = useId()
</script>

<template>
  <app-form
    :validation-schema="validationSchema"
    name="lastMinutes"
    :toolname="`lastMinutes-${id}`"
    :tooldescription="`Request a last minute booking for ${title}.`"
    :btn-text="$t('request')"
  >
    <form-fieldset
      :title="$t('form.formContact')"
      class="personal"
    >
      <form-input-text
        name="name"
        class="name"
        autocomplete="name"
        :title="$t('form.name')"
        toolparamdescription="Name"
      />
      <form-input-text
        name="address"
        class="address"
        autocomplete="street-address"
        :title="$t('form.address')"
        toolparamdescription="Address"
      />

      <form-input-text
        name="zipcode"
        class="zipcode"
        autocomplete="postal-code"
        :title="$t('form.zipcode')"
        toolparamdescription="Zipcode"
      />

      <form-input-text
        name="city"
        class="city"
        autocomplete="address-level2"
        :title="$t('form.city')"
        toolparamdescription="City"
      />

      <form-input-text
        name="country"
        class="country"
        autocomplete="country"
        :title="$t('form.country')"
        toolparamdescription="Country"
      />

      <form-input-text
        type="tel"
        name="phone"
        class="phone-number"
        autocomplete="tel"
        :title="$t('form.phoneNumber')"
        toolparamdescription="Phone number"
      />

      <form-input-text
        name="email"
        type="email"
        class="email"
        autocomplete="email"
        :title="$t('form.email')"
        toolparamdescription="Email address"
      />
    </form-fieldset>

    <form-fieldset
      :title="$t('familyData')"
      class="totals"
    >
      <form-input-text
        type="number"
        name="totalRooms"
        class="date"
        :title="$t('form.totalRooms')"
        toolparamdescription="Number of rooms"
      />

      <form-input-text
        type="number"
        name="totalAdults"
        class="date"
        :title="$t('form.totalAdults')"
        toolparamdescription="Number of adults"
      />

      <form-input-text
        type="number"
        name="totalChildren"
        :title="$t('form.totalChildren')"
        toolparamdescription="Number of kids"
      />

      <form-input-text
        name="ageChildren"
        :title="$t('form.ageChildren')"
        toolparamdescription="Age of kids"
      />
    </form-fieldset>

    <form-fieldset :title="$t('remarks')">
      <form-textarea
        name="remarks"
        :title="$t('form.remarks')"
        toolparamdescription="Remarkt"
        rows="4"
      />
    </form-fieldset>
  </app-form>
</template>

<style lang="css" scoped>
@media (--xs) {
  .dates {
    --columns: 2;
  }

  .personal {
    --columns: 4;
  }

  .totals {
    --columns: 4;
  }
}

.email,
.zipcode,
.address,
.phone-number,
.city,
.country,
.name {
  grid-column: span 4;
}

@media (--xs) {
  .address,
  .zipcode,
  .email,
  .phone-number,
  .city,
  .country {
    grid-column: span 2;
  }
}
</style>
