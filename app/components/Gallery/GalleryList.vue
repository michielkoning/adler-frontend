<script lang="ts" setup>
import type { Image } from '~~/shared/types/Image'

const props = defineProps<{
  id: number
  images: Image[]
  title: string
}>()

const slide = ref(0)

const previewImages = computed(() => {
  const list = props.images.slice(0, 5)
  return list.map((image, index) => {
    let sizes = 'xs:50vw sm:300px md:300px lg:300px xl:300px xxl:300px'
    if (index === 0) {
      sizes = 'xs:100vw sm:100vw md:100vw lg:1140px xl:1140px xxl:1140px'
    }
    else if (index === 1) {
      sizes = 'xs:50vw sm:300px md:300px lg:600px xl:600px xxl:600px'
    }
    return {
      ...image,
      sizes,
    }
  })
})
</script>

<template>
  <div>
    <app-modal
      id="gallery"
      size="large"
      :title="title"
    >
      <gallery-carousel
        :images="images"
        :slide="slide"
      />
    </app-modal>
    <ul class="list">
      <li
        v-for="image in previewImages"
        :key="image.src"
      >
        <app-image v-bind="image" />
      </li>
      <li class="btn-wrapper">
        <button
          commandfor="gallery"
          command="show-modal"
        >
          {{ $t("viewAllPhotos") }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
ul {
  @mixin list-reset;

  display: grid;
  grid-template-rows: 36vw 24vw;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--gutter);
}

li {
  &:has(img) {
    display: none;
  }

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    &:has(img) {
      display: block;
    }
  }

  &:nth-child(1):has(img) {
    grid-column: span 2;
  }
}

.btn-wrapper {
  display: block;
  grid-column: span 2;
}

@media (--sm) {
  ul {
    grid-template-rows: 36vw 12vw;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  li {
    &:nth-child(4) {
      &:has(img) {
        display: block;
      }
    }

    &:nth-child(1):has(img) {
      grid-column: span 4;
    }
  }

  .btn-wrapper {
    grid-column: span 1;
  }
}

@media (--lg) {
  ul {
    grid-template-rows: 12em 12em 4em;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  li {
    &:nth-child(4) {
      &:has(img) {
        display: none;
      }
    }

    &:nth-child(1):has(img) {
      grid-row: span 3;
      grid-column: span 2;
    }
  }
}

@media (--xlg) {
  ul {
    grid-template-rows: repeat(4, 9em);
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  li {
    &:nth-child(4),
    &:nth-child(5) {
      &:has(img) {
        display: block;
      }
    }

    &:nth-child(1):has(img) {
      grid-row: span 4;
      grid-column: span 4;
    }

    &:nth-child(2):has(img) {
      grid-row: span 2;
      grid-column: span 2;
    }
  }
}

button {
  @mixin btn;

  inline-size: 100%;
  block-size: 100%;
  color: var(--color-white);
  background: var(--color-gray);
  border-radius: 0;

  &:hover,
  &:focus-visible {
    background: var(--color-gray-dark);
  }

  @media (--sm) {
    font-size: var(--font-size-xl);
  }
}
</style>
