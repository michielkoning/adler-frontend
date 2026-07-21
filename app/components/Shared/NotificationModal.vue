<script lang="ts" setup>
const { locale } = useI18n()

const { data } = await useFetch('/api/notification', {
  query: {
    locale,
  },
})

const isOpen = ref(true)
</script>

<template>
  <app-modal
    v-if="data?.activate"
    id="notification"
    v-model:is-open="isOpen"
    :title="data.title ?? ''"
  >
    <div class="content">
      <app-image
        v-if="data.image"
        v-bind="data.image"
        sizes="100vw sm:270px md:270px lg:270px xl:270px 2xl:270px"
      />
      <div>
        <p>{{ data.content }}</p>
        <app-button
          v-if="data.link"
          v-bind="data.link"
          @click="isOpen = false"
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
  inline-size: 100%;
}
</style>
