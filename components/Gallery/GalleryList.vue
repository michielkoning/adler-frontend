<template>
  <div v-if="gallery.length">
    <gallery-carousel :gallery="gallery" />
    <app-modal
      :show="showModal"
      :large="true"
      :title="title"
      @close="toggleModal"
    >
      <gallery-carousel v-if="showModal" :gallery="gallery" :slide="slide" />
    </app-modal>
    <ul :class="$style.list">
      <li
        v-for="(item, index) in galleryCapped"
        :key="item.id"
        :class="[$style.item, $style[`item-${index}`]]"
        @click="openModalWithImage(index)"
      >
        <img :src="imageSrc(item, index)" alt="" :class="$style.image" />
      </li>
      <li :class="$style['item-btn']">
        <button :class="$style.btn" @click="toggleModal">
          {{ $t('viewAllPhotos') }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import GalleryCarousel from '~/components/Gallery/GalleryCarousel.vue'
import AppModal from '~/components/Shared/AppModal.vue'

export default {
  components: {
    GalleryCarousel,
    AppModal,
  },
  props: {
    gallery: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      slide: 0,
    }
  },
  computed: {
    galleryCapped() {
      return this.gallery.slice(0, 5)
    },
  },
  methods: {
    imageSrc(item, index) {
      if (index === 0) {
        return item.heroLarge
      }
      if (index === 1) {
        return item.heroMedium
      }
      return item.heroSmall
    },
    openModalWithImage(index) {
      this.slide = index
      this.showModal = true
    },
    toggleModal(index) {
      this.slide = 0
      this.showModal = !this.showModal
    },
  },
}
</script>

<style lang="postcss" module>
.list {
  @mixin list-reset;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 36vw 24vw auto;
  display: grid;
  grid-gap: var(--gutter);
  max-height: 36em;
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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 36vw 12vw auto;
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
    grid-template-rows: repeat(3, 1fr);
  }

  .item-0 {
    grid-column: span 3;
    grid-row: span 3;
  }

  .item-3 {
    display: none;
  }
}

@media (--viewport-xlg) {
  .list {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
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

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.btn {
  background: var(--color-gray);
  color: var(--color-white);
  text-align: center;
  padding: var(--spacing-s) var(--spacing-xs);
  font-family: var(--font-family-header);
  width: 100%;
  height: 100%;

  @media (--viewport-sm) {
    font-size: 1.25em;
  }
}
</style>

<i18n>
{
  "nl": {
    "viewAllPhotos": "Bekijk alle foto's"
  },
  "de": {
    "viewAllPhotos": "Mehr Fotos"
  },
  "en": {
    "viewAllPhotos": "View all photos"
  }
}
</i18n>
