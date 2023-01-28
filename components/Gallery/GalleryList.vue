<template>
  <div v-if="gallery.length">
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
        <tag :is="imageSizeComponent(index)" :image="item" :lazy="false" />
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
import GalleryImageLarge from '~/components/Gallery/Images/GalleryImageLarge.vue'
import GalleryImageMedium from '~/components/Gallery/Images/GalleryImageMedium.vue'
import GalleryImageSmall from '~/components/Gallery/Images/GalleryImageSmall.vue'

export default {
  components: {
    GalleryImageLarge,
    GalleryImageMedium,
    GalleryImageSmall,
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
    openModalWithImage(index) {
      this.slide = index
      this.showModal = true
    },
    toggleModal(index) {
      this.slide = 0
      this.showModal = !this.showModal
    },
    imageSizeComponent(index) {
      if (index === 0) {
        return 'gallery-image-large'
      } else if (index === 1) {
        return 'gallery-image-medium'
      }
      return 'gallery-image-small'
    },
  },
}
</script>

<style lang="postcss" module>
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
