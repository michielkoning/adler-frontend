<script lang="ts" setup>
import type { Image } from "~/types/Image";

const props = withDefaults(
  defineProps<{
    images: Image[];
    slide?: number;
  }>(),
  {
    slide: 0,
  },
);

const currentSlide = ref(props.slide);
const isActive = ref(false);

const items = useTemplateRef("items");
const list = useTemplateRef("list");

const slideNextEnabled = computed(() => {
  return currentSlide.value < props.images.length - 1;
});

const slidePreviousEnabled = computed(() => {
  return currentSlide.value > 0;
});

const goToSlide = () => {
  if (currentSlide.value <= props.images.length && currentSlide.value >= 0) {
    list.value.scrollLeft = items.value[currentSlide.value].offsetLeft;
  }
};

const goToNextSlide = () => {
  if (currentSlide.value < props.images.length - 1) {
    currentSlide.value = currentSlide.value + 1;
    goToSlide();
  }
};

const goToPreviousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value = currentSlide.value - 1;
    goToSlide();
  }
};

const scrollByKeys = (event: Event) => {
  const { key } = event;
  if (key === "ArrowRight") {
    goToNextSlide();
  }
  if (key === "ArrowLeft") {
    goToPreviousSlide();
  }
};

onMounted(() => {
  document.addEventListener("keydown", scrollByKeys);

  nextTick(() => {
    goToSlide();
    isActive.value = true;
  });
});

onUnmounted(() => {
  document.removeEventListener("keydown", scrollByKeys);
});
</script>

<template>
  <div class="wrapper">
    <ul ref="list" class="list" :class="{ active: isActive }">
      <li v-for="item in images" :key="item.id" ref="items" class="item">
        <app-image v-bind="item" />
      </li>
    </ul>
    <div class="button-wrapper">
      <button
        class="btn btn-previous"
        type="button"
        :disabled="!slidePreviousEnabled"
        @click="goToPreviousSlide"
      >
        <span class="sr-only">{{ $t("previousImage") }}</span>
        <app-icon icon="fa6-solid:chevron-left" class="icon" />
      </button>
      <button
        class="btn btn-next"
        type="button"
        :disabled="!slideNextEnabled"
        @click="goToNextSlide"
      >
        <span class="sr-only">{{ $t("nextImage") }}</span>
        <app-icon icon="fa6-solid:chevron-right" class="icon" />
      </button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  position: relative;
}

.list {
  @mixin list-reset;

  display: flex;
  overflow: hidden;
  max-height: 40em;
  height: 60vw;

  &.active {
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
  }
}

.item {
  scroll-snap-align: start;
  flex: 0 0 100%;
  width: 100%;
}

.btn {
  touch-action: manipulation;
  position: absolute;
  top: 50%;
  margin-top: calc(var(--spacing-l) * -1);
}

.btn-previous {
  left: 0.25em;
}

.btn-next {
  right: 0.25em;
}

.icon {
  width: 2.5em;
}
</style>
