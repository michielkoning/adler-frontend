<script lang="ts" setup>
  import type { IMenu } from "~~/interfaces/IMenu";
  import MenuQuery from "~/graphql/Menu/Menu.gql";
  import { hotelPageId, environmentPageId, kidsPageId } from "~/data/pages";
  const localePath = useLocalePath();

  const { locale } = useI18n();

  const { data } = await useAsyncQuery<IMenu>(MenuQuery, {
    language: locale.value.toUpperCase(),
    hotelPageId: hotelPageId[locale.value],
    environmentPageId: environmentPageId[locale.value],
    kidsPageId: kidsPageId[locale.value],
  });
</script>

<template>
  <div v-if="data">
    <ul>
      <li>
        <nuxt-link :to="localePath({ name: 'index' })">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="data.hotel.uri">{{ data.hotel.title }}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="data.environment.uri">
          {{ data.environment.title }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="data.kids.uri">
          {{ data.kids.title }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath({ name: 'contact' })">Contact</nuxt-link>
      </li>
    </ul>
  </div>
</template>
