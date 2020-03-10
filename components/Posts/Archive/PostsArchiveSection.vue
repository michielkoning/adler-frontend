<template>
  <section :class="$style['posts']" aria-labelledby="posts-title">
    <div :class="$style.wrapper">
      <h1 id="posts-title">{{ $t('title') }}</h1>
      <posts-archive-container>
        <template v-slot="data">
          <archive-list v-if="data" :items="data.posts" />
        </template>
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
