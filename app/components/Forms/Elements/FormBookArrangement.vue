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
    dateArrival: z.string().min(1, { error: t('form.error.required') }).default(''),
    dateDeparture: z.string().min(1, { error: t('form.error.required') }).default(''),
    remarks: z.string().default(''),
    title: z.literal(props.title).default(props.title),
  }),
)
</script>

<template>
  <app-form
    :validation-schema="validationSchema"
    name="arrangement"
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
      />
      <form-input-text
        name="address"
        class="address"
        autocomplete="street-address"
        :title="$t('form.address')"
      />

      <form-input-text
        name="zipcode"
        class="zipcode"
        autocomplete="postal-code"
        :title="$t('form.zipcode')"
      />

      <form-input-text
        name="city"
        class="city"
        autocomplete="locality"
        :title="$t('form.city')"
      />

      <form-input-text
        name="country"
        class="country"
        autocomplete="country"
        :title="$t('form.country')"
      />

      <form-input-text
        type="tel"
        name="phone"
        class="phone-number"
        autocomplete="tel"
        :title="$t('form.phoneNumber')"
      />

      <form-input-text
        name="email"
        type="email"
        class="email"
        autocomplete="email"
        :title="$t('form.email')"
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
      />

      <form-input-text
        type="number"
        name="totalAdults"
        class="date"
        :title="$t('form.totalAdults')"
      />

      <form-input-text
        type="number"
        name="totalChildren"
        :title="$t('form.totalChildren')"
      />

      <form-input-text
        name="ageChildren"
        :title="$t('form.ageChildren')"
      />
    </form-fieldset>
    <form-fieldset
      :title="$t('dates')"
      class="dates"
    >
      <form-input-text
        name="dateArrival"
        type="date"
        :title="$t('form.dateArrival')"
      />

      <form-input-text
        name="dateDeparture"
        type="date"
        :title="$t('form.dateDeparture')"
      />
    </form-fieldset>

    <form-fieldset :title="$t('remarks')">
      <form-textarea
        name="remarks"
        :title="$t('form.remarks')"
        rows="4"
      />
    </form-fieldset>
  </app-form>
</template>

<style lang="css" scoped>
@import "~/assets/css/media-queries/media-queries.css";

@media (--viewport-xs) {
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

@media (--viewport-xs) {
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
