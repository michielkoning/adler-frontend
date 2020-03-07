<template>
  <section :class="$style['posts']" aria-labelledby="posts-title">
    <div :class="$style.wrapper">
      <h1 id="posts-title">{{ $t('title') }}</h1>
      <posts-archive-container>
        <archive-list v-if="data" slot-scope="data" :items="data.posts" />
      </posts-archive-container>
    </div>
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

<style lang="postcss" module>
.posts {
}
</style>

<i18n>
{
  "nl": {
    "title": "Laatste berichten"
  }
}
</i18n>
