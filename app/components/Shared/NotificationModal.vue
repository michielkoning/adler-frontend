<script lang="ts" setup>
const { locale } = useI18n()

const { data } = await useFetch('/api/notification', {
  query: {
    locale,
  },
})
</script>

<template>
  <app-modal
    v-if="data"
    id="notification"
    :is-open="true"
    :title="data.title"
  >
    <div class="content">
      <app-image
        v-if="data.image"
        v-bind="data.image"
      />
      <div>
        <p>{{ data.content }}</p>
        <app-button
          v-if="data.link"
          v-bind="data.link"
        />
      </div>
    </div>
  </app-modal>
</template>

<style lang="css" scoped>
.content:has(img) {
  display: grid;
  gap: 1em;

  @media (--sm) {
    grid-template-columns: 15em auto;
  }
}

img {
  display: block;
  width: 100%;
}
</style>
