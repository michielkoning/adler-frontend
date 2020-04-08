<template>
  <section aria-labelledby="posts-title">
    <h1 id="posts-title" class="sr-only">{{ $t('title') }}</h1>
    <posts-archive-container>
      <template v-slot="data">
        <archive-list v-if="data" :items="data.posts" />
      </template>
    </posts-archive-container>
  </section>
</template>

<script>
import ArchiveList from '~/components/Archive/ArchiveList.vue'
import PostsArchiveContainer from '~/components/Posts/Archive/PostsArchiveContainer.vue'

export default {
  components: {
    ArchiveList,
    PostsArchiveContainer,
  },
}
</script>

<i18n>
{
  "nl": {
    "title": "Laatste berichten"
  }
}
</i18n>
