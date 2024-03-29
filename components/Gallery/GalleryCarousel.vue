<template>
  <div :class="$style.wrapper">
    <ul
      ref="list"
      :class="[$style.list, { [$style.active]: active }]"
      @scroll.passive="setSelectedSlideAfterScroll"
    >
      <li
        v-for="item in gallery"
        ref="item"
        :key="item.id"
        :class="$style.item"
      >
        <gallery-image-large :image="item" :class="$style.image" />
      </li>
    </ul>
    <div :class="$style['button-wrapper']">
      <button
        :class="[$style.btn, $style['btn-previous']]"
        :disabled="!slidePreviousEnabled"
        @click="goToPreviousSlide"
      >
        <span class="sr-only">{{ $t('previousSlide') }}</span>
        <icon-chevron-left aria-hidden="true" width="48" height="48" />
      </button>
      <button
        :class="[$style.btn, $style['btn-next']]"
        :disabled="!slideNextEnabled"
        @click="goToNextSlide"
      >
        <span class="sr-only">{{ $t('nextSlide') }}</span>
        <icon-chevron-right aria-hidden="true" width="48" height="48" />
      </button>
    </div>
  </div>
</template>

<script>
import IconChevronLeft from '~/icons/chevron-left.svg'
import IconChevronRight from '~/icons/chevron-right.svg'

export default {
  components: {
    IconChevronLeft,
    IconChevronRight,
  },
  props: {
    gallery: {
      type: Array,
      default: () => [],
    },
    slide: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentSlide: 0,
      allowSliding: true,
      active: false,
    }
  },
  computed: {
    slideNextEnabled() {
      return this.currentSlide < this.gallery.length - 1
    },
    slidePreviousEnabled() {
      return this.currentSlide > 0
    },
  },
  mounted() {
    document.addEventListener('keydown', (event) => this.scrollByKeys(event))
    this.currentSlide = this.slide
    this.active = true
    this.$nextTick(() => {
      this.goToSelectedSlide()
    })
  },
  destroyed() {
    document.removeEventListener('keydown', (event) => this.scrollByKeys(event))
  },
  methods: {
    scrollByKeys(event) {
      const { key } = event
      if (key === 'ArrowRight') {
        this.goToNextSlide()
      }
      if (key === 'ArrowLeft') {
        this.goToPreviousSlide()
      }
    },
    setSelectedSlideAfterScroll(element) {
      // Clear our timeout throughout the scroll
      window.clearTimeout(this.allowSliding)

      // Set a timeout to run after sliding ends
      this.allowSliding = setTimeout(() => {
        // Run the callback
        this.currentSlide = parseInt(
          element.target.scrollLeft / element.target.offsetWidth,
          10,
        )
      }, 66)
    },
    goToSelectedSlide() {
      const { list, item } = this.$refs
      list.scrollLeft = item[this.currentSlide].offsetLeft
    },
    goToNextSlide() {
      if (!this.slideNextEnabled) return
      if (!this.allowSliding) return
      this.currentSlide = this.currentSlide + 1
      this.goToSelectedSlide()
    },

    goToPreviousSlide() {
      if (!this.slidePreviousEnabled) return
      if (!this.allowSliding) return
      this.currentSlide = this.currentSlide - 1
      this.goToSelectedSlide()
    },
  },
}
</script>

<style lang="postcss" module>
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

.image {
  @mixin object-fit;
}

.wrapper {
  position: relative;
}

.btn {
  touch-action: manipulation;
  position: absolute;
  top: 50%;
  margin-top: calc(var(--spacing-l) * -1);
}

.btn-previous {
  left: 0;
}

.btn-next {
  right: 0;
}
</style>

<i18n>
{
  "nl": {
    "previousSlide": "Vorige afbeelding",
    "nextSlide": "Volgende afbeelding"
  },
  "de": {
    "previousSlide": "Vorheriges Bild",
    "nextSlide": "Nächstes Bild"
  },
  "en": {
    "previousSlide": "Previous image",
    "nextSlide": "Next image"
  }
}
</i18n>
