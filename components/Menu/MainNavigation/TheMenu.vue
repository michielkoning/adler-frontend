<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <center-wrapper>
    <ul>
      <li><nuxt-link :to="localePath('/')">home</nuxt-link></li>
      <li>
        <nuxt-link :to="localePath('/arrangementen/meivakantie-aanbieding/')"
          >arrangementen</nuxt-link
        >
      </li>
      <li>
        <nuxt-link :to="localePath('/kamers/')">rooms</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/kinderhotel-bregenzerwald-2/')"
          >Kinderen</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          :to="
            localePath({
              name: 'contact',
            })
          "
          >contact</nuxt-link
        >
      </li>
    </ul>
  </center-wrapper>
</template>

<style lang="postcss" scoped>
ul {
  display: flex;
  list-style: none outside;
  gap: 1em;
}
</style>
