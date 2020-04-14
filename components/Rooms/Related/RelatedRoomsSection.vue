<template>
  <sitebar-item-section id="related-rooms" :title="$t('title')">
    <related-rooms-container :not-in="notIn">
      <template v-slot="data">
        <sitebar-item-list v-if="data" :items="data.relatedRooms" />
      </template>
    </related-rooms-container>
  </sitebar-item-section>
</template>

<script>
import RelatedRoomsContainer from '~/components/Rooms/Related/RelatedRoomsContainer.vue'
import SitebarItemSection from '~/components/Sidebar/SitebarItemSection.vue'
import SitebarItemList from '~/components/Sidebar/SitebarItemList.vue'

export default {
  components: {
    SitebarItemSection,
    SitebarItemList,
    RelatedRoomsContainer,
  },
  props: {
    notIn: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Onze andere kamers"
  },
  "de": {
    "title": "PLACEHOLDER"
  },
  "en": {
    "title": "Our other rooms"
  }
}
</i18n>
