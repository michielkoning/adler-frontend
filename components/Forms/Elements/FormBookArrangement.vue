<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/zod";
import z from "zod";

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(1, "test"),
    address: z.string().min(1),
    zipcode: z.string().min(1),
    city: z.string().min(1),
    country: z.string().min(1),
    phone: z.string().default(""),
    email: z.string().email(),
    totalRooms: z.number().min(1),
    totalAdults: z.number().min(1),
    totalChildren: z.number().min(1),
    ageChildren: z.string().default(""),
    dateArrival: z.string().min(1),
    dateDeparture: z.string().min(1),
    remarks: z.string().default(""),
  }),
);
</script>

<template>
  <app-form :validation-schema="validationSchema" name="contact">
    <form-fieldset :title="$t('form.formContact')" class="personal">
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

    <form-fieldset :title="$t('familyData')" class="totals">
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

      <form-input-text name="ageChildren" :title="$t('form.ageChildren')" />
    </form-fieldset>
    <form-fieldset :title="$t('dates')" class="dates">
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
      <form-textarea name="remarks" :title="$t('form.remarks')" rows="4" />
    </form-fieldset>
  </app-form>
</template>

<style lang="postcss" scoped>
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
