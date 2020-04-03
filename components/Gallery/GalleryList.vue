<template>
  <div>
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
        :class="$style.item"
        @click="openModalWithImage(index)"
      >
        <img :src="imageSrc(item, index)" alt="" />
      </li>
      <li>
        <button :class="$style.btn" @click="toggleModal">
          <span :class="$style['btn-title']"> Bekijk alle foto's</span>
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

  display: grid;
  grid-column-gap: var(--gutter);
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

.item {
  cursor: pointer;

  &:nth-child(1) {
    grid-column: 1 / 5;
    grid-row: 1 / 5;
  }

  &:nth-child(2) {
    grid-column: 5 / 7;
    grid-row: 1 / 3;
  }
}

.btn {
  background: var(--color-gray);
  color: var(--color-white);
  text-align: center;
  padding: var(--spacing-s) var(--spacing-xs);
  font-family: var(--font-family-header);
  font-size: 1.25em;
  width: 100%;
  height: 100%;
}
</style>
