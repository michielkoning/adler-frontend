<script lang="ts" setup>
import type { Image } from "~/types/Image";

const props = defineProps<{
  images: Image[];
  title: string;
}>();

const slide = ref(0);
const showModal = ref(false);

const previewImages = computed(() => {
  const list = props.images.slice(0, 5);
  return list.map((image, index) => {
    let sizes = "xs:50vw sm:300px md:300px lg:300px xl:300px xxl:300px";
    if (index === 0) {
      sizes = "xs:100vw sm:100vw md:100vw lg:1140px xl:1140px xxl:1140px";
    } else if (index === 1) {
      sizes = "xs:50vw sm:300px md:300px lg:600px xl:600px xxl:600px";
    }
    return {
      ...image,
      sizes,
    };
  });
});

const selectSlide = (index: number) => {
  slide.value = index;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div>
    <app-modal
      v-if="showModal"
      :large="true"
      :title="title"
      @close="closeModal"
    >
      <gallery-carousel :images="images" :slide="slide" />
    </app-modal>
    <ul class="list">
      <li
        v-for="(image, index) in previewImages"
        :key="image.src"
        class="item"
        :class="`item-${index}`"
        @click="selectSlide(index)"
      >
        <app-image v-bind="image" />
      </li>
      <li class="item-btn">
        <button class="btn" type="button" @click="selectSlide(0)">
          {{ $t("viewAllPhotos") }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
@import "~/assets/css/media-queries/media-queries.css";

.list {
  @mixin list-reset;

  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: 36vw 24vw;
  display: grid;
  grid-gap: var(--gutter);
}

.item {
  cursor: pointer;
}

.item-0 {
  grid-column: span 2;
}

.item-3,
.item-4 {
  display: none;
}

.item-btn {
  grid-column: span 2;
}

@media (--viewport-sm) {
  .list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: 36vw 12vw;
  }

  .item-0 {
    grid-column: span 4;
  }

  .item-3 {
    display: block;
  }

  .item-btn {
    grid-column: span 1;
  }
}

@media (--viewport-lg) {
  .list {
    grid-template-rows: 12em 12em 4em;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .item-0 {
    grid-column: span 2;
    grid-row: span 3;
  }

  .item-3 {
    display: none;
  }
}

@media (--viewport-xlg) {
  .list {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-rows: repeat(4, 9em);
  }

  .item-0 {
    grid-column: span 4;
    grid-row: span 4;
  }

  .item-1 {
    grid-column: span 2;
    grid-row: span 2;
  }

  .item-3,
  .item-4 {
    display: block;
  }
}

.btn {
  @mixin btn;

  background: var(--color-gray);
  border-radius: 0;
  color: var(--color-white);
  width: 100%;
  height: 100%;

  &:hover,
  &:focus {
    background: var(--color-gray-dark);
  }

  @media (--viewport-sm) {
    font-size: var(--font-size-xl);
  }
}
</style>
