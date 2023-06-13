<template>
  <apollo-query
    :query="require('~/graphql/LastMinutes/LastMinutes.gql')"
    :variables="{ language: $i18n.locale.toUpperCase() }"
  >
    <template #default="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <last-minutes-section v-else-if="data" :items="data.lastMinutes.edges" />
    </template>
  </apollo-query>
</template>
