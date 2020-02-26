<template>
  <clickable-list-item :url="room.slug" class="list-item">
    <archive-wrapper :image="room.featuredImage">
      <template v-slot:title>
        <!-- eslint-disable-next-line -->
        <router-link :to="room.slug" v-html="room.title" class="link" />
      </template>

      <div class="price-badge">
        {{ room.prijzen.priceFrom }}
      </div>

      <!-- eslint-disable-next-line -->
      <p v-html="room.excerpt" />
    </archive-wrapper>
  </clickable-list-item>
</template>

<script>
import ArchiveWrapper from '@/components/ArchiveWrapper.vue'
import ClickableListItem from '@/components/Shared/ClickableListItem.vue'

export default {
  components: {
    ArchiveWrapper,
    ClickableListItem,
  },
  props: {
    room: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.link {
  @mixin link-reset;
}
</style>
